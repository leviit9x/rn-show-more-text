import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function RNShowMoreText({ text, numberOfLines }) {
  const [clippedText, setClippedText] = React.useState(text);
  const [isFirstRender, setIsFirstRender] = React.useState(true);

  React.useEffect(() => {
    setClippedText(text);
  }, [text]);

  function NodeText({ lessText, press, isLess }) {
    return (
      <Text>
        {lessText}
        <TouchableOpacity onPress={press} style={styles.btnText}>
          <Text style={styles.btnTextContent}>
            {isLess ? "Xem thêm" : "Rút gọn"}
          </Text>
        </TouchableOpacity>
      </Text>
    );
  }

  return (
    <Text
      onTextLayout={(event) => {
        const { lines } = event.nativeEvent;
        if (lines.length > 2 && isFirstRender) {
          let _t = text;
          let newLines = JSON.parse(JSON.stringify(lines));

          _t = newLines
            .splice(0, numberOfLines)
            .map((line) => line.text)
            .join(" ");

          let splitText = _t.substr(0, _t.length - 12) + "...  ";

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
    color: "green",
  },
});
