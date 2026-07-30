import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";

import Avatar from "../../Components/Avatar";
import PrimaryButton from "../../Constant/PrimaryButton";
import { DisplayText, HeaderText, BaseText } from "../../Components/Typography";
import { COLORS } from "../../Constant/Colors";

export default function PlacementResult({ score, onNext }) {
  const percentage = (score / 5) * 100;

  let level = "Beginner";
  let mood = "happy";

  if (percentage >= 80) {
    level = "Advanced";
  } else if (percentage >= 50) {
    level = "Intermediate";
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Avatar size={220} mood={mood} color={COLORS.Accent} />

        <View style={styles.text}>
          <HeaderText>Your Vocabulary Level</HeaderText>

          <DisplayText>{level.toUpperCase()}</DisplayText>

          <BaseText>Score: {score} / 5</BaseText>
        </View>

        <PrimaryButton title="Continue" onPress={onNext} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
  },

  content: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 28,
  },

  text: {
    alignItems: "center",
    gap: 16,
  },
});
