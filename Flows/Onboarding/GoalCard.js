import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import Avatar from "../../Components/Avatar";
import PrimaryButton from "../../Constant/PrimaryButton";
import { HeaderText, DisplayText, BaseText } from "../../Components/Typography";
import { COLORS } from "../../Constant/Colors";
import { useApp } from "../../Context/AppContext";

const GOALS = [
  "5 words / week",
  "10 words / week",
  "15 words / week",
  "20 words / week",
];

export default function GoalCard({ language, category, score }) {
  const { finishOnboarding } = useApp();

  const [goal, setGoal] = useState(GOALS[1]);

  async function handleFinish() {
    // TODO:
    // Save language
    // Save category
    // Save level
    // Save weekly goal
    // Firestore update here

    await finishOnboarding({
      language,
      category,
      level,
      goal,
    });
  }

  let level = "Beginner";

  if (score >= 4) {
    level = "Advanced";
  } else if (score >= 2) {
    level = "Intermediate";
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Avatar size={220} mood="happy" color={COLORS.Accent} />

        <View style={styles.text}>
          <HeaderText>You're Ready!</HeaderText>

          <BaseText>Language: {language}</BaseText>

          <BaseText>Category: {category}</BaseText>

          <DisplayText>{level.toUpperCase()}</DisplayText>
        </View>

        <View style={styles.dropdown}>
          <Picker selectedValue={goal} onValueChange={setGoal}>
            {GOALS.map((item) => (
              <Picker.Item key={item} label={item} value={item} />
            ))}
          </Picker>
        </View>

        <PrimaryButton title="Start Learning" onPress={handleFinish} />
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
    gap: 12,
  },

  dropdown: {
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: COLORS.black,
    overflow: "hidden",
  },
});
