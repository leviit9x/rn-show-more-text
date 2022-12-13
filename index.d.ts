import * as React from "react";

declare module "rn-show-more-text" {
  export interface RNShowMoreTextProps {
    numberOfLines: number;
    text: string;
  }

  export function RNShowMoreText(props: React.FC<RNShowMoreTextProps>) {}
}
