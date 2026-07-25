import { Text } from "react-native";

export default function CaptionText({ style, children, ...props }) {
  return (
    <Text
      style={[
        {
          fontFamily: "Lexend_400Regular",
          fontSize: 13,
          color: "black",
          lineHeight: 13,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
