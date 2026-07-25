import { Text } from "react-native";

export default function SubHeaderText({ style, children, ...props }) {
  return (
    <Text
      style={[
        {
          fontFamily: "BricolageGrotesque_700Bold",
          fontSize: 23,
          color: "black",
          lineHeight: 23,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
