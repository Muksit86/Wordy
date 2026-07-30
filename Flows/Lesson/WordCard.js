import React from "react";
import { ScrollView, StyleSheet, View, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import { DisplayText, BaseText } from "../../Components/Typography";

import PrimaryButton from "../../Constant/PrimaryButton";
import { COLORS } from "../../Constant/Colors";

export default function WordCard({ word, isLastWord, onNext }) {
  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.section}>
        <DisplayText>{word.word}</DisplayText>

        <View style={styles.pronunciationRow}>
          <BaseText>{word.pronunciation}</BaseText>

          <Pressable style={styles.audioButton}>
            <FontAwesome6 name="volume-high" size={15} color={COLORS.white} />
          </Pressable>
        </View>
      </View>

      <View style={styles.section}>
        <BaseText>{word.partOfSpeech}</BaseText>

        <View style={{ gap: 16 }}>
          <BaseText>{word.definition}</BaseText>
          <BaseText>{word.translation}</BaseText>
        </View>
      </View>

      <View style={styles.section}>
        <BaseText>Examples</BaseText>

        <View style={{ gap: 16 }}>
          {word.examples.map((example) => (
            <BaseText key={example}>• {example}</BaseText>
          ))}
        </View>
      </View>

      <PrimaryButton
        title={isLastWord ? "Start Quiz" : "Next Word"}
        onPress={onNext}
        style={styles.button}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingVertical: 40,
    gap: 40,
  },

  section: {
    gap: 12,
  },

  pronunciationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  audioButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    marginTop: "auto",
  },
});
