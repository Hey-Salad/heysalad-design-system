#!/usr/bin/env node
/**
 * Regenerate HeySalad token exports from the CSS sources.
 *
 *   node scripts/generate-tokens.mjs
 *
 * Reads tokens/colors.css, the radius tokens in tokens/spacing.css, and the
 * font tokens in tokens/typography.css. Writes:
 *   tokens/heysalad.tokens.json
 *   tokens/heysalad.tokens.ts
 *   tokens/HeySaladTokens.swift
 *
 * Values come from the CSS. This script does not invent colours or radii.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const PENDING = new Set(["success", "success-soft"]);
const RADIUS_ROLE = {
  md: "inputs",
  lg: "cards",
  pill: "buttons and chips",
};

function read(rel) {
  return readFileSync(join(root, rel), "utf8");
}

function parseVars(css) {
  const vars = [];
  const re = /--([A-Za-z0-9-]+)\s*:\s*([^;]+);/g;
  let match;
  while ((match = re.exec(css))) {
    vars.push({ name: match[1], raw: match[2].trim() });
  }
  return vars;
}

function camel(name) {
  return name.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

function resolve(raw, map, seen = new Set()) {
  const alias = raw.match(/^var\(\s*--([A-Za-z0-9-]+)\s*\)$/);
  if (!alias) return { value: raw, aliasOf: null };
  const target = alias[1];
  if (seen.has(target)) throw new Error(`Token cycle at --${target}`);
  if (!map.has(target)) throw new Error(`Unresolved var(--${target})`);
  seen.add(target);
  const next = resolve(map.get(target), map, seen);
  return { value: next.value, aliasOf: `--${target}` };
}

function mapOf(vars) {
  return new Map(vars.map((v) => [v.name, v.raw]));
}

function lengthValue(raw) {
  const px = raw.match(/^(-?\d*\.?\d+)px$/);
  if (px) return { raw, px: Number(px[1]) };
  const num = raw.match(/^(-?\d*\.?\d+)$/);
  if (num) return { raw, number: Number(num[1]) };
  const em = raw.match(/^(-?\d*\.?\d+)em$/);
  if (em) return { raw, em: Number(em[1]) };
  return { raw };
}

function quotedFamily(stack) {
  const m = stack.match(/"([^"]+)"/);
  if (!m) throw new Error(`No font family in ${stack}`);
  return m[1];
}

const colorVars = parseVars(read("tokens/colors.css"));
const colorMap = mapOf(colorVars);
const color = {};
for (const { name, raw } of colorVars) {
  const resolved = resolve(raw, colorMap);
  const entry = {
    css: `--${name}`,
    value: resolved.value,
  };
  if (resolved.aliasOf) entry.aliasOf = resolved.aliasOf;
  if (PENDING.has(name)) entry.status = "pending Peter's decision";
  color[camel(name)] = entry;
}

const radiusVars = parseVars(read("tokens/spacing.css")).filter((v) => v.name.startsWith("radius-"));
const radius = {};
for (const { name, raw } of radiusVars) {
  const key = name.slice("radius-".length);
  const parsed = lengthValue(raw);
  if (parsed.px == null) throw new Error(`Radius --${name} is not px: ${raw}`);
  const entry = { css: `--${name}`, px: parsed.px };
  if (RADIUS_ROLE[key]) entry.role = RADIUS_ROLE[key];
  else entry.note = "Existing scale step in tokens/spacing.css.";
  radius[key] = entry;
}

const fontVars = parseVars(read("tokens/typography.css"));
const fontMap = mapOf(fontVars);
const uiStack = fontMap.get("font-body");
const marketingStack = fontMap.get("font-display");
if (!uiStack || !marketingStack) throw new Error("Missing font family tokens");

const font = {
  ui: {
    family: quotedFamily(uiStack),
    css: "--font-body",
    stack: uiStack,
    usage: "App UI. The only typeface in product interfaces.",
  },
  marketing: {
    family: quotedFamily(marketingStack),
    css: "--font-display",
    stack: marketingStack,
    usage: "Ads, marketing, and website hero headlines. Never app UI.",
  },
  weight: {},
  size: {},
  leading: {},
  tracking: {},
};

for (const { name, raw } of fontVars) {
  if (name.startsWith("weight-")) font.weight[camel(name.slice("weight-".length))] = lengthValue(raw).number;
  else if (name.startsWith("text-")) {
    const key = camel(name.slice("text-".length));
    const parsed = lengthValue(raw);
    font.size[key] = { px: parsed.px };
    if (key === "display") font.size[key].usage = "Marketing and website heroes. Grandstander. Never app UI.";
  } else if (name.startsWith("leading-")) font.leading[camel(name.slice("leading-".length))] = lengthValue(raw).number;
  else if (name.startsWith("tracking-")) font.tracking[camel(name.slice("tracking-".length))] = lengthValue(raw);
}

if (color.ink900.value.toLowerCase() !== "#1f1416") {
  throw new Error(`Ink must stay #1f1416, found ${color.ink900.value}`);
}
if (radius.lg.px !== 16 || radius.md.px !== 12 || radius.pill.px !== 999) {
  throw new Error("Approved radii are card 16, input 12, pill 999");
}
if (font.ui.family !== "Figtree" || font.marketing.family !== "Grandstander") {
  throw new Error("Font families drifted from Figtree (UI) and Grandstander (marketing)");
}
const banned = JSON.stringify({ color, radius });
if (banned.includes("#000000") || banned.includes("50px") || /"px":\s*50\b/.test(JSON.stringify(radius))) {
  throw new Error("Refusing unapproved brand-kit values");
}

const tokens = {
  meta: {
    name: "HeySalad",
    generatedFrom: ["tokens/colors.css", "tokens/spacing.css", "tokens/typography.css"],
    generator: "scripts/generate-tokens.mjs",
  },
  color,
  radius,
  font,
};

const json = `${JSON.stringify(tokens, null, 2)}\n`;
writeFileSync(join(root, "tokens/heysalad.tokens.json"), json);

const ts = `/* Generated by scripts/generate-tokens.mjs. Do not edit by hand. */
export const heysaladTokens = ${JSON.stringify(tokens, null, 2)} as const;

export type HeySaladTokens = typeof heysaladTokens;
`;
writeFileSync(join(root, "tokens/heysalad.tokens.ts"), ts);

writeFileSync(join(root, "tokens/HeySaladTokens.swift"), swiftSource(tokens));

console.log("Wrote tokens/heysalad.tokens.json");
console.log("Wrote tokens/heysalad.tokens.ts");
console.log("Wrote tokens/HeySaladTokens.swift");

function swiftSource(tokens) {
  const lines = [];
  lines.push("// Generated by scripts/generate-tokens.mjs. Do not edit by hand.");
  lines.push("// Source: tokens/colors.css, tokens/spacing.css, tokens/typography.css.");
  lines.push("");
  lines.push("import Foundation");
  lines.push("");
  lines.push("public enum HeySaladTokens {");
  lines.push("    public enum Color {");
  for (const [key, entry] of Object.entries(tokens.color)) {
    if (entry.status) {
      lines.push(`        /// ${entry.status}.`);
    } else if (entry.aliasOf) {
      lines.push(`        /// Alias of ${entry.aliasOf}.`);
    }
    lines.push(`        public static let ${key} = "${entry.value}"`);
  }
  lines.push("    }");
  lines.push("");
  lines.push("    public enum Radius {");
  lines.push("        /// Cards.");
  lines.push(`        public static let card: Double = ${tokens.radius.lg.px}`);
  lines.push("        /// Inputs.");
  lines.push(`        public static let input: Double = ${tokens.radius.md.px}`);
  for (const [key, entry] of Object.entries(tokens.radius)) {
    const note = entry.role ? entry.role : entry.note;
    if (note) lines.push(`        /// ${note}`);
    lines.push(`        public static let ${key}: Double = ${entry.px}`);
  }
  lines.push("    }");
  lines.push("");
  lines.push("    public enum Font {");
  lines.push(`        /// ${tokens.font.ui.usage}`);
  lines.push(`        public static let ui = "${tokens.font.ui.family}"`);
  lines.push(`        /// ${tokens.font.marketing.usage}`);
  lines.push(`        public static let marketing = "${tokens.font.marketing.family}"`);
  lines.push("        public enum Weight {");
  for (const [key, value] of Object.entries(tokens.font.weight)) {
    lines.push(`            public static let ${key}: Double = ${value}`);
  }
  lines.push("        }");
  lines.push("        public enum Size {");
  for (const [key, entry] of Object.entries(tokens.font.size)) {
    if (entry.usage) lines.push(`            /// ${entry.usage}`);
    const swiftKey = key === "default" ? "`default`" : key;
    lines.push(`            public static let ${swiftKey}: Double = ${entry.px}`);
  }
  lines.push("        }");
  lines.push("        public enum Leading {");
  for (const [key, value] of Object.entries(tokens.font.leading)) {
    lines.push(`            public static let ${key}: Double = ${value}`);
  }
  lines.push("        }");
  lines.push("        public enum Tracking {");
  for (const [key, entry] of Object.entries(tokens.font.tracking)) {
    lines.push(`            public static let ${key} = "${entry.raw}"`);
  }
  lines.push("        }");
  lines.push("    }");
  lines.push("}");
  lines.push("");
  return lines.join("\n");
}
