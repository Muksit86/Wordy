import React from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import PrimaryButton from "../Constant/PrimaryButton";
import { DisplayText, HeaderText, BaseText } from "./Typography";

const COLORS = {
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 5%)",
  Accent: "hsl(211, 43%, 73%)",
  Secondary: "hsl(47, 88%, 73%)",
  Triary: "hsl(221, 47%, 48%)",
  Background: "hsl(30, 100%, 87%)",
};

export default function WrongAnswerModal({
  visible,
  onClose,
  onSave,
  word,
  type,
  meaning,
  translation,
}) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <View style={styles.header}>
            <HeaderText>Wrong answer</HeaderText>

            <TouchableOpacity onPress={onClose}>
              <FontAwesome6 name="xmark" size={28} color={COLORS.black} />
            </TouchableOpacity>
          </View>

          <DisplayText>{word}</DisplayText>

          <View style={styles.body}>
            <BaseText style={styles.gray}>{type}</BaseText>

            <HeaderText>{meaning}</HeaderText>

            <HeaderText>{translation}</HeaderText>
          </View>

          <PrimaryButton
            title="Save to review"
            icon={
              <FontAwesome6 name="bookmark" size={24} color={COLORS.white} />
            }
            onPress={onSave}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.15)",
  },

  sheet: {
    backgroundColor: "#FFB4B4",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,

    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderColor: COLORS.black,

    paddingHorizontal: 28,
    paddingTop: 28,
    paddingBottom: 40,
    gap: 28,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  body: {
    gap: 18,
  },

  gray: {
    color: "#737373",
  },
});
