import { Text } from "react-native";

export default function HeaderText({ style, children, ...props }) {
  return (
    <Text
      style={[
        {
          fontFamily: "BricolageGrotesque_700Bold",
          fontSize: 26,
          color: "black",
          lineHeight: 26,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
