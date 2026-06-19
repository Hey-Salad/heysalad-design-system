import * as React from "react";

/** Small status/label pill in brand or semantic tones. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "brand" | "neutral" | "success" | "warning" | "error" | "solid";
  size?: "sm" | "md";
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
