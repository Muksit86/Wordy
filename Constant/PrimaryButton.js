import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import { HeaderText } from "../Components/Typography";
import { COLORS } from "./Colors";

export default function PrimaryButton({
  title,
  onPress,
  icon = "arrow-right",
  backgroundColor = COLORS.Triary,
  color = COLORS.white,
  style,
  textStyle,
  disabled = false,
}) {
  return (
    <Pressable
      activeOpacity={0.8}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor },
        disabled && styles.disabled,
        style,
      ]}
    >
      <HeaderText style={[styles.text, { color }, textStyle]}>
        {title}
      </HeaderText>

      {icon ? <FontAwesome6 name={icon} size={22} color={color} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 88,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: COLORS.black,
    boxShadow: `4px 4px 0px ${COLORS.black}`,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
    paddingHorizontal: 24,
  },

  disabled: {
    opacity: 0.55,
  },

  text: {
    textAlign: "center",
  },
});
