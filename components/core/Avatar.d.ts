import * as React from "react";

/** Circular avatar with image or initials fallback on a warm peach tint. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string | null;
  name?: string;
  size?: number;
}
export function Avatar(props: AvatarProps): JSX.Element;
