import * as React from "react";
import { StyleProp, TextProps, ViewStyle } from "react-native";

declare module "rn-show-more-text" {
  export interface RNShowMoreTextProps {
    numberOfLines: number;
    text: string;
    textStyle: StyleProp<TextProps>;
    btnStyle: StyleProp<ViewStyle>;
    btnTextStyle: StyleProp<TextProps>;
    btnTextMore?: string;
    btnTextLess?: string;
  }

  function RNShowMoreText(
    props: React.FC<RNShowMoreTextProps>
  ): React.ReactElement;

  export { RNShowMoreText };
}
