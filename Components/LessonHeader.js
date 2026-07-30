import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";

import BaseText from "./Typography/BaseText";
import { COLORS } from "../Constant/Colors";

export default function LessonHeader({ current, total, progress, onBack }) {
  const navigation = useNavigation();

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Pressable onPress={onBack ?? navigation.goBack}>
          <FontAwesome6 name="angle-left" size={24} color={COLORS.black} />
        </Pressable>

        <BaseText style={styles.progressText}>
          {current}/{total} word
        </BaseText>
      </View>

      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            {
              width: progress,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 14,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  progressText: {
    fontSize: 16,
  },

  progressBar: {
    width: "100%",
    height: 16,
    borderRadius: 99,
    backgroundColor: COLORS.white,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: COLORS.black,
    borderRadius: 99,
  },
});
