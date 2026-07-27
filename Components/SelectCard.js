import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Pressable, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import { BaseText, HeaderText } from "./Typography";

const COLORS = {
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 5%)",
  Accent: "hsl(211, 43%, 73%)",
  Secondary: "hsl(47, 88%, 73%)",
  Triary: "hsl(221, 47%, 48%)",
  Background: "hsl(30, 100%, 87%)",
};

export default function SelectCard({
  value,
  options = [],
  onChange,
  placeholder = "Select",
  style,
}) {
  const [visible, setVisible] = useState(false);

  const handleSelect = (item) => {
    onChange(item);
    setVisible(false);
  };

  return (
    <>
      <Pressable
        activeOpacity={0.8}
        style={[styles.card, style]}
        onPress={() => setVisible(true)}
      >
        <BaseText>{value || placeholder}</BaseText>

        <FontAwesome6 name="angle-down" size={28} color={COLORS.black} />
      </Pressable>

      <Modal transparent animationType="fade" visible={visible}>
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          <Pressable style={styles.modal}>
            <HeaderText style={styles.title}>Select an option</HeaderText>

            {options.map((item) => (
              <Pressable
                key={item}
                style={[styles.option, value === item && styles.selected]}
                onPress={() => handleSelect(item)}
              >
                <BaseText>{item}</BaseText>

                {value === item && (
                  <FontAwesome6 name="check" size={18} color={COLORS.black} />
                )}
              </Pressable>
            ))}
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 82,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: COLORS.black,
    boxShadow: `4px 4px 0px ${COLORS.black}`,

    paddingHorizontal: 24,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    padding: 24,
  },

  modal: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: COLORS.black,
    padding: 20,
    gap: 12,
  },

  title: {
    marginBottom: 8,
  },

  option: {
    height: 56,
    borderRadius: 12,
    paddingHorizontal: 16,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  selected: {
    backgroundColor: COLORS.Accent,
  },
});
