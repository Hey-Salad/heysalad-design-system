import * as React from "react";

/**
 * Rounded content surface — white by default, light-peach when `warm`.
 *
 * @startingPoint section="Surfaces" subtitle="Rounded card surface" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  warm?: boolean;
  interactive?: boolean;
  padding?: number;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
