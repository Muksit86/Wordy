import { Text } from "react-native";

export default function BaseText({ style, children, ...props }) {
  return (
    <Text
      style={[
        {
          fontFamily: "Lexend_400Regular",
          fontSize: 16,
          color: "black",
          lineHeight: 16,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
