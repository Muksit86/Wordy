import { Text } from "react-native";

export default function DisplayText({ style, children, ...props }) {
  return (
    <Text
      style={[
        {
          fontFamily: "BricolageGrotesque_700Bold",
          fontSize: 32,
          color: "black",
          lineHeight: 32,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
