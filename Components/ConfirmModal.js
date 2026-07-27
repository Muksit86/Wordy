import React from "react";
import { Modal, StyleSheet, Pressable, View } from "react-native";

import Avatar from "./Avatar";
import PrimaryButton from "../Constant/PrimaryButton";

import { DisplayText, HeaderText, BaseText } from "./Typography";

const COLORS = {
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 5%)",
};

export default function ConfirmationModal({
  visible,
  onConfirm,
  onCancel,
  title = "Do you really wanna do this",
  subtitle = "I will miss you",
  confirmText = "Yes",
  cancelText = "Cancel",
  mood = "sad",
}) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <BaseText style={styles.subtitle}>{subtitle}</BaseText>

          <Avatar size={170} mood={mood} />

          <DisplayText style={styles.title}>{title}</DisplayText>

          <View style={styles.buttons}>
            <PrimaryButton
              title={confirmText}
              onPress={onConfirm}
              style={styles.confirm}
            />

            <Pressable style={styles.cancelButton} onPress={onCancel}>
              <HeaderText>{cancelText}</HeaderText>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  card: {
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: COLORS.black,

    paddingHorizontal: 28,
    paddingVertical: 30,

    alignItems: "center",
  },

  subtitle: {
    marginBottom: 24,
  },

  title: {
    textAlign: "center",
    marginTop: 28,
    marginBottom: 36,
  },

  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 18,
  },

  confirm: {
    flex: 1,
  },

  cancelButton: {
    flex: 1,
    height: 62,

    backgroundColor: COLORS.white,

    borderWidth: 3,
    borderColor: COLORS.black,
    borderRadius: 18,

    boxShadow: `4px 4px 0px ${COLORS.black}`,

    justifyContent: "center",
    alignItems: "center",
  },
});
