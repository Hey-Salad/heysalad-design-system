import * as React from "react";

/** Text field with label, hint, error state, and optional leading icon. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  iconLeft?: React.ReactNode;
}
export function Input(props: InputProps): JSX.Element;
