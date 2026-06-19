import * as React from "react";

/** Selectable filter chip (cuisine, dietary tags). Toggles to cherry when selected. */
export interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
