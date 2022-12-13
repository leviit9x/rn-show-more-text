import * as React from "react";
import { StyleProp, TextProps, ViewStyle } from "react-native";

declare module "@leviit9x/rn-show-more-text" {
  export interface RNShowMoreTextProps {
    numberOfLines: number;
    text: string;
    textStyle?: StyleProp<TextProps>;
    btnStyle?: StyleProp<ViewStyle>;
    btnTextStyle?: StyleProp<TextProps>;
    btnTextMore?: string;
    btnTextLess?: string;
  }

  export function RNShowMoreText(
    props: RNShowMoreTextProps
  ): React.ReactElement;
}
