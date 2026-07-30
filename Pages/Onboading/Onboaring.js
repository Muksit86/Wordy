import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Pressable, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { DisplayText, HeaderText } from "../../Components/Typography";
import PrimaryButton from "../../Constant/PrimaryButton";
import { COLORS } from "../../Constant/Colors";
import { useApp } from "../../Context/AppContext";

const onboardingSteps = [
  {
    title: "Choose a language",
    options: ["English", "Spanish", "French", "German", "Bangla"],
  },
  {
    title: "Choose a category",
    options: [
      "Business",
      "Education",
      "Science",
      "Travel",
      "Daily Communication",
    ],
  },
];

export default function OnboardingScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const stepIndex = route.params?.stepIndex ?? 0;
  const step = onboardingSteps[stepIndex];
  const isLastStep = stepIndex === onboardingSteps.length - 1;
  const progress = `${((stepIndex + 1) / onboardingSteps.length) * 100}%`;

  const { finishOnboarding } = useApp();

  async function handleSelect() {
    if (isLastStep) {
      await finishOnboarding();
      return;
    }

    navigation.push("Onboarding", {
      stepIndex: stepIndex + 1,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.progressContainer}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: progress }]} />
          </View>
        </View>

        <DisplayText>{step.title}</DisplayText>

        <View style={styles.list}>
          {step.options.map((item) => (
            <Pressable
              key={item}
              style={styles.card}
              activeOpacity={0.8}
              onPress={handleSelect}
            >
              <HeaderText>{item}</HeaderText>

              <FontAwesome6 name="arrow-right" size={24} color={COLORS.black} />
            </Pressable>
          ))}
        </View>

        <PrimaryButton
          title={isLastStep ? "Start Learning" : "Skip"}
          onPress={handleSelect}
          backgroundColor={isLastStep ? COLORS.Triary : COLORS.Secondary}
          color={isLastStep ? COLORS.white : COLORS.black}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
  },

  content: {
    paddingHorizontal: 28,
    paddingTop: 40,
    gap: 32,
  },

  progressContainer: {
    marginBottom: 8,
  },

  progressTrack: {
    width: "100%",
    height: 28,
    backgroundColor: COLORS.white,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: COLORS.black,
    overflow: "hidden",
  },

  progressFill: {
    width: "10%",
    height: "100%",
    backgroundColor: COLORS.black,
    borderRadius: 100,
  },

  list: {
    gap: 24,
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: COLORS.black,
    boxShadow: `4px 4px 0px ${COLORS.black}`,
    minHeight: 92,
    paddingHorizontal: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
