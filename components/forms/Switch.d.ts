import * as React from "react";

/** Brand toggle switch with a playful bounce on the knob. */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  label?: string;
  style?: React.CSSProperties;
}
export function Switch(props: SwitchProps): JSX.Element;
