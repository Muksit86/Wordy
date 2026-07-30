import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { COLORS } from "../Constant/Colors";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function Card({ children, onPress, style, disabled = false }) {
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const shadowOffset = 4 - offset.value;

    return {
      transform: [{ translateX: offset.value }, { translateY: offset.value }],
      boxShadow: `${shadowOffset}px ${shadowOffset}px 0px ${COLORS.black}`,
    };
  });

  return (
    <AnimatedPressable
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => {
        offset.value = withTiming(4, {
          duration: 70,
        });
      }}
      onPressOut={() => {
        offset.value = withTiming(0, {
          duration: 70,
        });
      }}
      style={[styles.card, animatedStyle, disabled && styles.disabled, style]}
    >
      {children}
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderWidth: 3,
    borderColor: COLORS.black,
    borderRadius: 18,
    boxShadow: `4px 4px 0px ${COLORS.black}`,
  },

  disabled: {
    opacity: 0.55,
  },
});
