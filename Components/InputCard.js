import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const COLORS = {
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 5%)",
};

export default function InputCard({
  value,
  onChangeText,
  placeholder,
  leftIcon,
  rightIcon,
  secureTextEntry = false,
  keyboardType = "default",
  editable = true,
  autoCapitalize = "none",
  multiline = false,
  style,
  inputStyle,
  onRightPress,
}) {
  const [hidden, setHidden] = useState(secureTextEntry);

  const handleRightPress = () => {
    if (secureTextEntry) {
      setHidden(!hidden);
    }

    onRightPress?.();
  };

  return (
    <View style={[styles.container, style]}>
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#888888"
        secureTextEntry={hidden}
        keyboardType={keyboardType}
        editable={editable}
        autoCapitalize={autoCapitalize}
        multiline={multiline}
        style={[styles.input, inputStyle]}
      />

      {rightIcon && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleRightPress}
          style={styles.rightIcon}
        >
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 82,
    backgroundColor: COLORS.white,
    borderWidth: 3,
    borderColor: COLORS.black,
    borderRadius: 20,
    boxShadow: `4px 4px 0px ${COLORS.black}`,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 20,
    gap: 18,
  },

  leftIcon: {
    width: 28,
    alignItems: "center",
  },

  input: {
    flex: 1,
    fontSize: 18,
    color: COLORS.black,
    paddingVertical: 0,
  },

  rightIcon: {
    width: 28,
    alignItems: "center",
  },
});
