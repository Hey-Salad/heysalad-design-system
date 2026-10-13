/* @ds-bundle: {"format":3,"namespace":"HeySaladDesignSystem_7c87a6","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"6b1a9d956d76","components/core/Badge.jsx":"b56104547efa","components/core/Button.jsx":"cb3f82665039","components/core/Tag.jsx":"73346232155c","components/forms/Checkbox.jsx":"1ca2de410a24","components/forms/Input.jsx":"23a9b6d44b5e","components/forms/Switch.jsx":"08d16a346b38","components/surfaces/Card.jsx":"9a661dd30287","ui_kits/sally/App.jsx":"d8d41dff63c2","ui_kits/sally/DiscoverScreen.jsx":"9cb1217ce76c","ui_kits/sally/RecipeDetailScreen.jsx":"24e84acd0dfe","ui_kits/sally/ShoppingListScreen.jsx":"223b96905a04","ui_kits/sally/WelcomeScreen.jsx":"552ff4a76626","ui_kits/sally/data.js":"ad8e160018c7","ui_kits/sally/icons.jsx":"8636968a9f84"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HeySaladDesignSystem_7c87a6 = window.HeySaladDesignSystem_7c87a6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Circular avatar. Falls back to initials on a warm tint when no image. */
function Avatar({
  src = null,
  name = "",
  size = 40,
  style = {},
  ...rest
}) {
  const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      background: "var(--light-peach)",
      color: "var(--brand-press)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      fontSize: size * 0.4,
      overflow: "hidden",
      flex: "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status/label pill. Use `tone` for semantic meaning; keep text short.
 */
function Badge({
  tone = "brand",
  size = "md",
  children,
  style = {},
  ...rest
}) {
  const tones = {
    brand: {
      background: "var(--cherry-red-soft)",
      color: "var(--brand-press)"
    },
    neutral: {
      background: "var(--surface-muted)",
      color: "var(--text-body)"
    },
    success: {
      background: "var(--success-soft)",
      color: "var(--success)"
    },
    warning: {
      background: "var(--warning-soft)",
      color: "var(--warning)"
    },
    error: {
      background: "var(--error-soft)",
      color: "var(--error)"
    },
    solid: {
      background: "var(--brand)",
      color: "var(--white)"
    }
  };
  const sizes = {
    sm: {
      fontSize: 11,
      padding: "3px 8px"
    },
    md: {
      fontSize: 12.5,
      padding: "4px 11px"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      borderRadius: "var(--radius-pill)",
      lineHeight: 1.2,
      letterSpacing: "0.01em",
      ...sizes[size],
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * HeySalad primary button. Cherry Red is the hero color; use `primary` for the
 * single most important action per view. Pill-shaped, Figtree SemiBold label.
 */
function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 14,
      gap: 6
    },
    md: {
      padding: "12px 22px",
      fontSize: 16,
      gap: 8
    },
    lg: {
      padding: "15px 30px",
      fontSize: 18,
      gap: 10
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    padding: sizes[size].padding,
    fontSize: sizes[size].fontSize,
    fontFamily: "var(--font-body)",
    fontWeight: "var(--weight-semibold)",
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    border: "1.5px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    width: fullWidth ? "100%" : "auto",
    transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    whiteSpace: "nowrap",
    ...style
  };
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      boxShadow: "var(--shadow-brand)"
    },
    secondary: {
      background: "var(--white)",
      color: "var(--brand)",
      borderColor: "var(--brand)"
    },
    soft: {
      background: "var(--light-peach)",
      color: "var(--brand-press)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)"
    }
  };
  const disabledStyle = disabled ? {
    background: "var(--light-peach)",
    color: "var(--text-disabled)",
    borderColor: "transparent",
    boxShadow: "none",
    opacity: 0.9
  } : {};
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = !disabled && hover ? hoverFor(variant) : {};
  const activeStyle = !disabled && active ? {
    transform: "scale(0.97)"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...disabledStyle,
      ...hoverStyle,
      ...activeStyle
    },
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), iconLeft, children, iconRight);
}
function hoverFor(variant) {
  switch (variant) {
    case "primary":
      return {
        background: "var(--brand-hover)"
      };
    case "secondary":
      return {
        background: "var(--cherry-red-soft)"
      };
    case "soft":
      return {
        background: "var(--peach)",
        color: "var(--white)"
      };
    case "ghost":
      return {
        background: "var(--surface-muted)"
      };
    default:
      return {};
  }
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Selectable filter chip / tag. Use for cuisine filters, dietary tags, etc.
 * Toggles between resting and selected (cherry) states.
 */
function Tag({
  selected = false,
  icon = null,
  children,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const resting = {
    background: hover ? "var(--cherry-red-soft)" : "var(--white)",
    color: "var(--text-body)",
    borderColor: "var(--border)"
  };
  const active = {
    background: "var(--brand)",
    color: "var(--white)",
    borderColor: "var(--brand)"
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 14px",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: "var(--weight-medium)",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid",
      cursor: "pointer",
      transition: "all var(--dur-fast) var(--ease-out)",
      ...(selected ? active : resting),
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with brand-cherry checked state and rounded box. */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-body)",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 22,
      height: 22,
      borderRadius: "var(--radius-sm)",
      border: `1.5px solid ${checked ? "var(--brand)" : "var(--border-strong)"}`,
      background: checked ? "var(--brand)" : "var(--white)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all var(--dur-fast) var(--ease-out)",
      flex: "none"
    }
  }, rest), checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12.5l4.5 4.5L19 7",
    stroke: "white",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with optional label, leading icon, and error state. */
function Input({
  label = "",
  hint = "",
  error = "",
  iconLeft = null,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? "var(--error)" : focus ? "var(--brand)" : "var(--border)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "var(--white)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      padding: "0 14px",
      boxShadow: focus ? "0 0 0 4px var(--cherry-red-soft)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    }
  }, iconLeft, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      padding: "12px 0",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--text-body)"
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? "var(--error)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill toggle switch in brand cherry. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: "relative",
      width: 46,
      height: 26,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--brand)" : "var(--ink-300)",
      transition: "background var(--dur-base) var(--ease-out)",
      flex: "none",
      opacity: disabled ? 0.5 : 1
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 23 : 3,
      width: 20,
      height: 20,
      borderRadius: "var(--radius-pill)",
      background: "var(--white)",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--dur-base) var(--ease-bounce)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Rounded content card. `warm` uses light-peach; `interactive` lifts on hover. */
function Card({
  warm = false,
  interactive = false,
  padding = 20,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: warm ? "var(--surface-warm)" : "var(--surface-card)",
      border: warm ? "none" : "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding,
      boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sally/App.jsx
try { (() => {
// Sally — app shell: flow state, tab bar, and screen routing.
function SallyApp() {
  const [stage, setStage] = React.useState("welcome"); // welcome | app
  const [tab, setTab] = React.useState("discover"); // discover | list | profile
  const [detail, setDetail] = React.useState(null); // recipe or null
  const [saved, setSaved] = React.useState({}); // id -> bool
  const [list, setList] = React.useState([]); // {name, done}

  function addToList(recipe) {
    setList(prev => {
      const names = new Set(prev.map(i => i.name));
      const add = recipe.ingredients.filter(n => !names.has(n)).map(name => ({
        name,
        done: false
      }));
      return [...prev, ...add];
    });
    setDetail(null);
    setTab("list");
  }
  let screen;
  if (detail) {
    screen = /*#__PURE__*/React.createElement(RecipeDetailScreen, {
      recipe: detail,
      onBack: () => setDetail(null),
      onAdd: addToList,
      saved: !!saved[detail.id],
      onToggleSave: () => setSaved(s => ({
        ...s,
        [detail.id]: !s[detail.id]
      }))
    });
  } else if (tab === "discover") {
    screen = /*#__PURE__*/React.createElement(DiscoverScreen, {
      onOpen: setDetail,
      onLike: r => setSaved(s => ({
        ...s,
        [r.id]: true
      }))
    });
  } else if (tab === "list") {
    screen = /*#__PURE__*/React.createElement(ShoppingListScreen, {
      items: list,
      onToggle: i => setList(prev => prev.map((it, j) => j === i ? {
        ...it,
        done: !it.done
      } : it)),
      onClear: () => setList([])
    });
  } else {
    screen = /*#__PURE__*/React.createElement(ProfileScreen, {
      saved: saved
    });
  }
  if (stage === "welcome") {
    return /*#__PURE__*/React.createElement(WelcomeScreen, {
      onStart: () => setStage("app")
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0
    }
  }, screen), !detail && /*#__PURE__*/React.createElement(TabBar, {
    tab: tab,
    setTab: setTab,
    listCount: list.filter(i => !i.done).length
  }));
}
function TabBar({
  tab,
  setTab,
  listCount
}) {
  const tabs = [{
    id: "discover",
    glyph: "home",
    label: "Discover"
  }, {
    id: "list",
    glyph: "cart",
    label: "List"
  }, {
    id: "profile",
    glyph: "user",
    label: "Profile"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderTop: "1px solid var(--line-200)",
      background: "var(--white)",
      padding: "8px 8px 22px"
    }
  }, tabs.map(t => {
    const active = tab === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setTab(t.id),
      style: {
        flex: 1,
        border: "none",
        background: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: "6px 0",
        color: active ? "var(--brand)" : "var(--ink-300)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Glyph, {
      name: t.glyph,
      size: 24,
      color: active ? "var(--brand)" : "var(--ink-300)",
      strokeWidth: active ? 2.4 : 2
    }), t.id === "list" && listCount > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: -4,
        right: -8,
        minWidth: 16,
        height: 16,
        padding: "0 4px",
        borderRadius: 999,
        background: "var(--brand)",
        color: "white",
        fontFamily: "var(--font-body)",
        fontSize: 10,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, listCount)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 11,
        fontWeight: active ? 700 : 500
      }
    }, t.label));
  }));
}
function ProfileScreen({
  saved
}) {
  const {
    Avatar,
    Card,
    Switch,
    Badge
  } = window.HeySaladDesignSystem_7c87a6;
  const recipes = window.SALLY_RECIPES.filter(r => saved[r.id]);
  const [veg, setVeg] = React.useState(true);
  const [notif, setNotif] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      overflowY: "auto",
      background: "var(--cream)",
      padding: "20px 20px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Mei Tan",
    size: 56
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      color: "var(--text-strong)",
      margin: 0
    }
  }, "Mei Tan"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Home cook \xB7 London"))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      margin: "0 0 10px"
    }
  }, "Saved recipes ", /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, recipes.length)), recipes.length === 0 ? /*#__PURE__*/React.createElement(Card, {
    warm: true,
    padding: 18,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-body)",
      margin: 0
    }
  }, "Tap the heart on any recipe to save it here.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      overflowX: "auto",
      marginBottom: 22,
      paddingBottom: 4
    }
  }, recipes.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      width: 130,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: r.photo,
    alt: r.title,
    style: {
      width: "100%",
      height: 90,
      objectFit: "cover",
      borderRadius: "var(--radius-md)",
      marginBottom: 6
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--text-strong)",
      margin: 0,
      lineHeight: 1.25
    }
  }, r.title)))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      margin: "0 0 10px"
    }
  }, "Preferences"), /*#__PURE__*/React.createElement(Card, {
    padding: 6
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Switch, {
    checked: veg,
    onChange: setVeg,
    label: "Vegetarian recipes only"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--line-100)",
      margin: "2px 14px"
    }
  }), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Switch, {
    checked: notif,
    onChange: setNotif,
    label: "Daily recipe notification"
  }))));
}
function Row({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px"
    }
  }, children);
}
Object.assign(window, {
  SallyApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sally/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sally/DiscoverScreen.jsx
try { (() => {
// Sally — Discover feed: swipeable recipe cards (dislike / refresh / like).
function DiscoverScreen({
  onOpen,
  onLike
}) {
  const {
    Badge,
    Tag
  } = window.HeySaladDesignSystem_7c87a6;
  const recipes = window.SALLY_RECIPES;
  const filters = window.SALLY_FILTERS;
  const [filter, setFilter] = React.useState("All");
  const [idx, setIdx] = React.useState(0);
  const [leaving, setLeaving] = React.useState(null); // 'left' | 'right' | null

  const recipe = recipes[idx % recipes.length];
  function advance(dir) {
    setLeaving(dir);
    if (dir === "right") onLike && onLike(recipe);
    setTimeout(() => {
      setIdx(i => (i + 1) % recipes.length);
      setLeaving(null);
    }, 280);
  }
  const cardTransform = leaving === "left" ? "translateX(-130%) rotate(-14deg)" : leaving === "right" ? "translateX(130%) rotate(14deg)" : "none";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Tonight's pick"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24,
      color: "var(--text-strong)",
      margin: 0
    }
  }, "Discover")), /*#__PURE__*/React.createElement(BrandIcon, {
    name: "chef",
    size: 30,
    color: "var(--brand)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      overflowX: "auto",
      paddingBottom: 4
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f),
    style: {
      flex: "none"
    }
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative",
      margin: "8px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "10px 10px 0",
      background: "var(--white)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-sm)",
      transform: "scale(0.96)",
      transformOrigin: "top center"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(recipe),
    style: {
      position: "absolute",
      inset: 0,
      textAlign: "left",
      border: "none",
      padding: 0,
      cursor: "pointer",
      background: "var(--white)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      transform: cardTransform,
      opacity: leaving ? 0 : 1,
      transition: "transform 0.28s var(--ease-out), opacity 0.28s var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "62%"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: recipe.photo,
    alt: recipe.title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12,
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: "time",
    size: 12,
    color: "white"
  }), recipe.minutes, " min"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 22,
      color: "var(--text-strong)",
      margin: "0 0 6px"
    }
  }, recipe.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-muted)",
      margin: "0 0 12px",
      lineHeight: 1.45
    }
  }, recipe.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, recipe.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "brand"
  }, t)), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, recipe.kcal, " kcal"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 22,
      padding: "20px 0 24px"
    }
  }, /*#__PURE__*/React.createElement(ActionButton, {
    onClick: () => advance("left"),
    icon: "dislike",
    bg: "var(--white)",
    tint: "var(--ink-500)",
    size: 58
  }), /*#__PURE__*/React.createElement(ActionButton, {
    onClick: () => advance("refresh"),
    icon: "refresh",
    bg: "var(--white)",
    tint: "var(--peach)",
    size: 48
  }), /*#__PURE__*/React.createElement(ActionButton, {
    onClick: () => advance("right"),
    icon: "like",
    bg: "var(--brand)",
    tint: "white",
    size: 64,
    glow: true
  })));
}
function ActionButton({
  onClick,
  icon,
  bg,
  tint,
  size,
  glow
}) {
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onMouseLeave: () => setPress(false),
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--line-200)",
      background: bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: glow ? "var(--shadow-brand)" : "var(--shadow-sm)",
      transform: press ? "scale(0.9)" : "none",
      transition: "transform var(--dur-fast) var(--ease-bounce)"
    }
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: icon,
    size: size * 0.46,
    color: tint
  }));
}
Object.assign(window, {
  DiscoverScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sally/DiscoverScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sally/RecipeDetailScreen.jsx
try { (() => {
// Sally — Recipe detail screen.
function RecipeDetailScreen({
  recipe,
  onBack,
  onAdd,
  saved,
  onToggleSave
}) {
  const {
    Badge,
    Button
  } = window.HeySaladDesignSystem_7c87a6;
  const [tab, setTab] = React.useState("ingredients");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 232,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: recipe.photo,
    alt: recipe.title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(31,20,22,0.28) 0%, rgba(31,20,22,0) 38%)"
    }
  }), /*#__PURE__*/React.createElement(RoundChrome, {
    onClick: onBack,
    style: {
      left: 16
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    name: "back",
    size: 22,
    color: "var(--text-strong)"
  })), /*#__PURE__*/React.createElement(RoundChrome, {
    onClick: onToggleSave,
    style: {
      right: 16
    }
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: "heart",
    size: 22,
    color: saved ? "var(--brand)" : "var(--ink-300)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "20px 22px 16px",
      marginTop: -22,
      background: "var(--white)",
      borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 28,
      color: "var(--text-strong)",
      margin: "0 0 8px",
      lineHeight: 1.1
    }
  }, recipe.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid"
  }, /*#__PURE__*/React.createElement(BrandIcon, {
    name: "time",
    size: 12,
    color: "white"
  }), recipe.minutes, " min"), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, recipe.level), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, recipe.kcal, " kcal")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--text-body)",
      margin: "0 0 18px"
    }
  }, recipe.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      borderBottom: "1px solid var(--line-200)",
      marginBottom: 16
    }
  }, ["ingredients", "method"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      padding: "0 0 10px",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: 600,
      textTransform: "capitalize",
      color: tab === t ? "var(--brand)" : "var(--text-muted)",
      borderBottom: tab === t ? "2.5px solid var(--brand)" : "2.5px solid transparent",
      marginBottom: -1
    }
  }, t))), tab === "ingredients" ? /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, recipe.ingredients.map((ing, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--peach)",
      flex: "none"
    }
  }), ing))) : /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, recipe.steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 999,
      background: "var(--cherry-red-soft)",
      color: "var(--brand-press)",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 14,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--text-body)"
    }
  }, s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 22px 24px",
      borderTop: "1px solid var(--line-100)",
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => onAdd(recipe)
  }, "Add ingredients to list")));
}
function RoundChrome({
  children,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      position: "absolute",
      top: 16,
      width: 40,
      height: 40,
      borderRadius: 999,
      border: "none",
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(6px)",
      boxShadow: "var(--shadow-sm)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      ...style
    }
  }, children);
}
Object.assign(window, {
  RecipeDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sally/RecipeDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sally/ShoppingListScreen.jsx
try { (() => {
// Sally — Shopping list screen (aggregates added ingredients).
function ShoppingListScreen({
  items,
  onToggle,
  onClear
}) {
  const {
    Button,
    Badge
  } = window.HeySaladDesignSystem_7c87a6;
  const remaining = items.filter(i => !i.done).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px 10px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Shopping list"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 24,
      color: "var(--text-strong)",
      margin: 0
    }
  }, "Your basket"), items.length > 0 && /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, remaining, " to buy"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "6px 20px 16px"
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/Sal.png",
    alt: "Sally",
    style: {
      width: 88,
      height: 88,
      opacity: 0.9,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      color: "var(--text-strong)",
      margin: "0 0 6px"
    }
  }, "Nothing here yet"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-muted)",
      margin: 0,
      maxWidth: 220
    }
  }, "Like a recipe and add its ingredients \u2014 they'll land right here.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => onToggle(i),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      textAlign: "left",
      background: "var(--white)",
      border: "1px solid var(--line-200)",
      borderRadius: "var(--radius-md)",
      padding: "13px 14px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "var(--radius-sm)",
      flex: "none",
      border: `1.5px solid ${it.done ? "var(--brand)" : "var(--border-strong)"}`,
      background: it.done ? "var(--brand)" : "var(--white)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, it.done && /*#__PURE__*/React.createElement(Glyph, {
    name: "check",
    size: 13,
    color: "white",
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: it.done ? "var(--text-muted)" : "var(--text-body)",
      textDecoration: it.done ? "line-through" : "none"
    }
  }, it.name))))), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 20px 24px",
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClear
  }, "Clear"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true
  }, "Order for delivery")));
}
Object.assign(window, {
  ShoppingListScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sally/ShoppingListScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sally/WelcomeScreen.jsx
try { (() => {
// Sally — Welcome / onboarding screen.
function WelcomeScreen({
  onStart
}) {
  const {
    Button
  } = window.HeySaladDesignSystem_7c87a6;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(180deg, var(--light-peach) 0%, var(--cream) 60%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/Sal.png",
    alt: "Sally",
    style: {
      width: 132,
      height: 132,
      marginBottom: 28,
      filter: "drop-shadow(var(--shadow-md))"
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 33,
      lineHeight: 1.1,
      color: "var(--text-strong)",
      letterSpacing: "-0.02em",
      margin: "0 0 14px",
      whiteSpace: "nowrap"
    }
  }, "Love your food"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 17,
      lineHeight: 1.5,
      color: "var(--text-body)",
      maxWidth: 280,
      margin: 0
    }
  }, "Snap your fridge, get recipes you'll actually cook \u2014 zero waste, no last-minute store runs.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 40px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onStart
  }, "Get started"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "md",
    fullWidth: true,
    onClick: onStart
  }, "I already have an account")));
}
Object.assign(window, {
  WelcomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sally/WelcomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sally/data.js
try { (() => {
// Sally — recipe data for the UI kit. Photos reuse HeySalad brand imagery.
window.SALLY_RECIPES = [{
  id: "orzo",
  title: "Tomato Basil Orzo",
  photo: "../../assets/images/BrandImage2.jpg",
  minutes: 15,
  level: "Easy",
  kcal: 420,
  tags: ["Vegetarian", "One-pan"],
  blurb: "A one-pan weeknight win using what's already in your fridge.",
  ingredients: ["200g orzo pasta", "6 cherry tomatoes, halved", "1 ball fresh mozzarella", "Handful of basil", "2 tbsp olive oil", "Pinch of sea salt"],
  steps: ["Boil the orzo until just tender, then drain.", "Blister the tomatoes in olive oil over high heat.", "Fold in orzo, torn mozzarella and basil.", "Finish with sea salt and a drizzle of oil."]
}, {
  id: "pancakes",
  title: "Berry Breakfast Stack",
  photo: "../../assets/images/BrandImage1.jpg",
  minutes: 20,
  level: "Easy",
  kcal: 380,
  tags: ["Breakfast", "Vegetarian"],
  blurb: "Fluffy pancakes topped with fresh berries — a weekend treat.",
  ingredients: ["150g plain flour", "1 egg", "200ml milk", "1 tsp baking powder", "Mixed berries to top", "Maple syrup"],
  steps: ["Whisk flour, egg, milk and baking powder to a smooth batter.", "Cook spoonfuls in a hot pan until bubbles form, then flip.", "Stack high and pile on the berries.", "Finish with a good pour of maple syrup."]
}, {
  id: "caprese",
  title: "Penne Caprese",
  photo: "../../assets/images/BrandImage2.jpg",
  minutes: 25,
  level: "Easy",
  kcal: 460,
  tags: ["Vegetarian"],
  blurb: "Classic tomato, mozzarella and basil — tossed through penne.",
  ingredients: ["300g penne", "Cherry tomatoes on the vine", "Mini mozzarella balls", "Black olives", "Fresh basil", "Olive oil"],
  steps: ["Cook the penne to al dente.", "Halve tomatoes and mozzarella; pit the olives.", "Toss everything with olive oil and basil.", "Season and serve warm or at room temperature."]
}];
window.SALLY_FILTERS = ["All", "Vegetarian", "Under 30 min", "Breakfast", "One-pan"];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sally/data.js", error: String((e && e.message) || e) }); }

// ui_kits/sally/icons.jsx
try { (() => {
// Sally UI kit — icons.
// Brand icons (Heart, Like, Dislike, Refresh, Chef's hat, Cooking time) are the
// real HeySalad SVGs, inlined so fill is fully controllable per use. Nav glyphs
// are minimal rounded line icons (utility — not part of the brand set).

const BRAND_PATHS = {
  like: {
    vb: "0 0 96 96",
    d: ["M81.4583 31.8339L51.9618 31.8339C49.5356 31.8339 47.798 29.4913 48.5021 27.1695L50.8905 19.2928C52.5105 13.9502 49.4155 8.3909 43.9211 7.40129C39.2589 6.5616 34.8729 9.3559 33.5507 13.7161L29.5414 26.9384C28.5571 30.1843 28.057 33.5577 28.057 36.9495L28.057 72.528C28.057 75.7036 30.6314 78.278 33.807 78.278L74.2442 78.278C77.7354 78.278 80.7635 75.8656 81.5436 72.4627L88.7578 40.9963C89.8331 36.3064 86.2699 31.8339 81.4583 31.8339Z", "M10.2505 78.278L16.6611 78.278C18.532 78.278 20.0486 76.7614 20.0486 74.8905L20.0486 35.2214C20.0486 33.3505 18.532 31.8339 16.6611 31.8339L10.2505 31.8339C8.37959 31.8339 6.86299 33.3505 6.86299 35.2214L6.86298 74.8905C6.86298 76.7614 8.37959 78.278 10.2505 78.278Z"]
  },
  dislike: {
    vb: "0 0 96 96",
    d: ["M14.5417 64.1661H44.0382C46.4644 64.1661 48.202 66.5087 47.4979 68.8305L45.1095 76.7072C43.4895 82.0498 46.5845 87.6091 52.0789 88.5987C56.7411 89.4384 61.1271 86.6441 62.4493 82.2839L66.4586 69.0616C67.4429 65.8157 67.943 62.4423 67.943 59.0505V23.472C67.943 20.2964 65.3686 17.722 62.193 17.722H21.7558C18.2646 17.722 15.2365 20.1344 14.4564 23.5373L7.24216 55.0037C6.16686 59.6936 9.73006 64.1661 14.5417 64.1661Z", "M85.7495 17.722H79.3389C77.468 17.722 75.9514 19.2386 75.9514 21.1095V60.7786C75.9514 62.6495 77.468 64.1661 79.3389 64.1661H85.7495C87.6204 64.1661 89.137 62.6495 89.137 60.7786V21.1095C89.137 19.2386 87.6204 17.722 85.7495 17.722Z"]
  },
  refresh: {
    vb: "0 0 96 96",
    d: ["M50.1755 71.8654C59.8043 70.7868 67.521 63.0897 68.6192 53.4609C70.0606 40.871 60.2749 30.1538 48.0085 30.0166V24.3687C48.0085 24.055 47.6163 23.8883 47.3516 24.0844L35.7226 32.6248C35.5264 32.7718 35.5264 33.0562 35.7226 33.2033L47.3516 41.7437C47.6163 41.9398 48.0085 41.7633 48.0085 41.4593V35.8213C56.6274 35.9586 63.5303 43.2929 62.942 52.0588C62.4419 59.599 56.294 65.7175 48.7537 66.198C40.7625 66.7079 33.9674 61.0012 32.7516 53.4511C32.526 52.049 31.3004 51.0292 29.8884 51.0292C28.1333 51.0292 26.7605 52.5883 27.0351 54.3238C28.7412 65.0802 38.6739 73.1499 50.1755 71.8654Z"]
  },
  heart: {
    vb: "0 0 96 96",
    d: ["M59.856 26.7149C67.6516 26.7528 73.962 33.0631 74 40.8589C74 55.1415 48.0001 69.2855 48.0001 69.2855C48.0001 69.2855 22 54.9335 22 40.8589C22 33.0474 28.3324 26.7149 36.144 26.7149C40.9258 26.6776 45.3962 29.0826 48.0001 33.0935C50.6217 29.1021 55.0806 26.7033 59.856 26.7149Z"]
  },
  time: {
    vb: "0 0 16 16",
    d: ["M8 16C12.4171 16 16 12.4171 16 8C16 3.58285 12.4171 0 8 0C3.58285 0 0 3.58285 0 8C0 12.4171 3.58285 16 8 16ZM7.42855 3.42858C7.42855 3.11428 7.6857 2.85713 8 2.85713C8.3143 2.85713 8.57144 3.11428 8.57144 3.42858V7.72572L11.2143 9.84001C11.46 10.0372 11.5 10.3971 11.3029 10.6429C11.1914 10.7829 11.0257 10.8571 10.8571 10.8571C10.7314 10.8571 10.6057 10.8171 10.5 10.7314L7.64288 8.44573C7.50859 8.33714 7.4286 8.1743 7.4286 8V3.42858H7.42855Z"]
  },
  chef: {
    vb: "0 0 18 18",
    d: ["M14.829 15.3456H3.17432V17.465H14.829V15.3456Z", "M13.8284 2.60701C13.4477 2.60701 13.0746 2.65753 12.7139 2.75748C12.4068 2.1754 11.966 1.67439 11.4198 1.29076C10.7159 0.796396 9.88766 0.53508 9.02471 0.53508C8.1579 0.53508 7.32663 0.798541 6.6208 1.29699C6.07458 1.68276 5.6347 2.18567 5.32912 2.76954C4.95524 2.66151 4.56768 2.60698 4.1715 2.60698C1.87133 2.60701 0 4.47838 0 6.77855C0 8.71271 1.33527 10.3787 3.17408 10.8299V14.2889H14.8288V10.8291C16.6659 10.3768 18 8.71102 18 6.77851C18 4.47838 16.1287 2.60701 13.8284 2.60701Z"]
  }
};

// Inline brand SVG — fill is fully controllable and renders everywhere.
function BrandIcon({
  name,
  size = 24,
  color = "var(--brand)"
}) {
  const icon = BRAND_PATHS[name];
  if (!icon) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: icon.vb,
    fill: "none",
    role: "img",
    "aria-label": name,
    style: {
      flex: "none",
      display: "block"
    }
  }, icon.d.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d,
    fill: color
  })));
}

// Minimal rounded line glyphs for nav / chrome (stroke matches soft geometry).
function Glyph({
  name,
  size = 24,
  color = "currentColor",
  strokeWidth = 2
}) {
  const paths = {
    home: /*#__PURE__*/React.createElement("path", {
      d: "M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"
    }),
    cart: /*#__PURE__*/React.createElement("path", {
      d: "M5 6h15l-2 9H7L5 6zm0 0L4 3H2m6 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
    }),
    user: /*#__PURE__*/React.createElement("path", {
      d: "M5 20a7 7 0 0 1 14 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
    }),
    search: /*#__PURE__*/React.createElement("path", {
      d: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-2l4 4"
    }),
    back: /*#__PURE__*/React.createElement("path", {
      d: "M15 5l-7 7 7 7"
    }),
    bookmark: /*#__PURE__*/React.createElement("path", {
      d: "M6 4h12v16l-6-4-6 4z"
    }),
    plus: /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    }),
    check: /*#__PURE__*/React.createElement("path", {
      d: "M5 12.5l4.5 4.5L19 7"
    }),
    clock: /*#__PURE__*/React.createElement("path", {
      d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-14v5l3 2"
    })
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "block"
    }
  }, paths[name]);
}
Object.assign(window, {
  BrandIcon,
  Glyph
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sally/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

})();
