import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import Card from "../../Components/Card";
import Avatar from "../../Components/Avatar";
import PrimaryButton from "../../Constant/PrimaryButton";
import { DisplayText, HeaderText, BaseText } from "../../Components/Typography";

import { COLORS } from "../../Constant/Colors";

export default function ResultCard({ score, total, onCelebrate, onBackHome }) {
  const percentage = Math.round((score / total) * 100);

  const passed = percentage >= 70;

  const mood = passed ? "happy" : "angry";

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <DisplayText style={styles.title}>Lesson Complete!</DisplayText>

        <Avatar
          size={180}
          mood={mood}
          color={passed ? COLORS.Accent : "#FFB4B4"}
        />

        <View style={styles.scoreSection}>
          <HeaderText>
            {score} / {total}
          </HeaderText>

          <BaseText>{percentage}% Correct</BaseText>
        </View>

        <View style={styles.stats}>
          <Stat icon="star" label="XP" value={`+${score * 10}`} />

          <Stat
            icon="fire-flame-simple"
            label="Accuracy"
            value={`${percentage}%`}
          />
        </View>

        <BaseText style={styles.message}>
          {passed
            ? "Excellent work! Keep your streak alive."
            : "Nice effort. Review the words and try again."}
        </BaseText>

        {passed && (
          <PrimaryButton
            title="Celebrate"
            icon="party-horn"
            onPress={onCelebrate}
          />
        )}

        <PrimaryButton
          title="Back Home"
          icon="house"
          backgroundColor={COLORS.white}
          color={COLORS.black}
          onPress={onBackHome}
        />
      </Card>
    </View>
  );
}

function Stat({ icon, label, value }) {
  return (
    <View style={styles.stat}>
      <FontAwesome6 name={icon} size={22} color={COLORS.black} />

      <BaseText>{label}</BaseText>

      <HeaderText>{value}</HeaderText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  card: {
    padding: 28,
    gap: 24,
    alignItems: "center",
  },

  title: {
    textAlign: "center",
  },

  scoreSection: {
    alignItems: "center",
    gap: 8,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 16,
  },

  stat: {
    flex: 1,
    borderWidth: 3,
    borderColor: COLORS.black,
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
    gap: 10,
    backgroundColor: COLORS.white,
  },

  message: {
    textAlign: "center",
    lineHeight: 24,
  },
});
