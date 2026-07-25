import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import PrimaryButton from "../../Constant/PrimaryButton";

import { HeaderText } from "../../Components/Typography";

const COLORS = {
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 5%)",
  Accent: "hsl(211, 43%, 73%)",
  Secondary: "hsl(47, 88%, 73%)",
  Triary: "hsl(221, 47%, 48%)",
  Background: "hsl(30, 100%, 87%)",
};

export default function PlacementTestScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <HeaderText style={styles.text}>
          Let's take a quick test to{"\n"}
          understand your vocabulary level.
        </HeaderText>

        <PrimaryButton
          title="Take the test"
          onPress={() => navigation.navigate("PlacementQuiz")}
        />
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
    justifyContent: "center",
    paddingHorizontal: 28,
    gap: 48,
  },

  text: {
    textAlign: "center",
    lineHeight: 42,
  },
});
