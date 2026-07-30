import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useApp } from "../../Context/AppContext";
import Avatar from "../../Components/Avatar";
import PrimaryButton from "../../Constant/PrimaryButton";

import { DisplayText, HeaderText, BaseText } from "../../Components/Typography";

const COLORS = {
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 5%)",
  Accent: "hsl(211, 43%, 73%)",
  Secondary: "hsl(47, 88%, 73%)",
  Triary: "hsl(221, 47%, 48%)",
  Background: "hsl(30, 100%, 87%)",
};

const WORD_OPTIONS = [
  "5 words / week",
  "10 words / week",
  "15 words / week",
  "20 words / week",
];

export default function FinalOnboardingScreen() {
  const [goal, setGoal] = useState(WORD_OPTIONS[0]);
  const { finishOnboarding } = useApp();

  const handleGetStarted = async () => {
    await finishOnboarding();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Avatar size={220} mood="happy" color={COLORS.Accent} />

        <View style={styles.textContainer}>
          <HeaderText>Great!</HeaderText>

          <BaseText style={styles.description}>
            We think you will perfect for our
          </BaseText>

          <DisplayText style={styles.course}>ADVANCE COURSE</DisplayText>
        </View>

        <View style={styles.dropdown}>
          <Picker
            selectedValue={goal}
            onValueChange={setGoal}
            dropdownIconColor={COLORS.black}
          >
            {WORD_OPTIONS.map((item) => (
              <Picker.Item key={item} label={item} value={item} />
            ))}
          </Picker>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton title="Complete" onPress={handleGetStarted} />
        </View>
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
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 28,
    paddingVertical: 40,
  },

  textContainer: {
    alignItems: "center",
    gap: 14,
  },

  description: {
    textAlign: "center",
  },

  course: {
    textAlign: "center",
    marginTop: 12,
  },

  dropdown: {
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: COLORS.black,
    boxShadow: `4px 4px 0px ${COLORS.black}`,
    overflow: "hidden",
  },

  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
});
