import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function RNShowMoreText({
  text,
  numberOfLines,
  textStyle = {},
  btnStyle = {},
  btnTextStyle = {},
  btnTextMore = "View more",
  btnTextLess = "View less",
}) {
  if (text === null || typeof text !== "string") {
    throw new Error(`You need to provide a string instead of ${typeof text}`);
  }

  const [clippedText, setClippedText] = React.useState("");
  const [isFirstRender, setIsFirstRender] = React.useState(true);

  React.useEffect(() => {
    setClippedText(text);
  }, [text]);

  function NodeText({ lessText, press, isLess }) {
    return (
      <Text style={textStyle}>
        {lessText}
        <TouchableOpacity
          onPress={press}
          style={[styles.btnText, StyleSheet.flatten(btnStyle)]}
        >
          <Text
            style={[styles.btnTextContent, StyleSheet.flatten(btnTextStyle)]}
          >
            {isLess ? btnTextMore : btnTextLess}
          </Text>
        </TouchableOpacity>
      </Text>
    );
  }

  return (
    <Text
      style={[
        { opacity: isFirstRender ? 1 : 0 },
        StyleSheet.flatten(textStyle),
      ]}
      numberOfLines={undefined}
      onTextLayout={(event) => {
        const { lines } = event.nativeEvent;
        if (lines.length > 2 && isFirstRender) {
          let _t = text;
          _t = lines
            .slice(0, numberOfLines)
            .map((line) => line.text)
            .join(" ");

          let splitText = _t.substring(0, _t.length - 12) + "...  ";

          const _nodeLess = (
            <NodeText
              isLess
              lessText={splitText}
              press={() => {
                const _nodeMore = (
                  <NodeText
                    isLess={false}
                    lessText={text + "  "}
                    press={() => {
                      setClippedText(_nodeLess);
                    }}
                  />
                );
                setClippedText(_nodeMore);
                setIsFirstRender(false);
              }}
            />
          );

          setClippedText(_nodeLess);
        }
      }}
    >
      {clippedText}
    </Text>
  );
}

const styles = StyleSheet.create({
  btnText: {
    marginTop: -3,
  },
  btnTextContent: {
    textDecorationLine: "underline",
    color: "#11CA71",
  },
});
