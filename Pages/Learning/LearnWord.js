import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
  View,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { DisplayText, HeaderText, BaseText } from "../../Components/Typography";
import PrimaryButton from "../../Constant/PrimaryButton";
import { COLORS } from "../../Constant/Colors";

const words = [
  {
    word: "Reluctant",
    pronunciation: "/ri-luhk-tuhnt/",
    partOfSpeech: "Adjective",
    definition: "Unwilling or hesitant to do something.",
    translation: "Unwilling or hesitant",
    examples: [
      "She was reluctant to speak in front of the class.",
      "Although he was reluctant at first, he eventually agreed to help.",
      "Many people are reluctant to change their daily habits.",
    ],
  },
  {
    word: "Meticulous",
    pronunciation: "/muh-tik-yuh-luhs/",
    partOfSpeech: "Adjective",
    definition: "Showing great attention to detail.",
    translation: "Very careful and precise",
    examples: [
      "He kept meticulous notes during every lesson.",
      "The designer was meticulous about every color choice.",
    ],
  },
  {
    word: "Eloquent",
    pronunciation: "/el-uh-kwuhnt/",
    partOfSpeech: "Adjective",
    definition: "Fluent, clear, and persuasive in speaking or writing.",
    translation: "Clear and expressive",
    examples: [
      "Her eloquent speech inspired the whole room.",
      "The letter was short but eloquent.",
    ],
  },
];

export default function LearnWordScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const wordIndex = route.params?.wordIndex ?? 0;
  const currentWord = words[wordIndex] ?? words[0];
  const isLastWord = wordIndex === words.length - 1;
  const progress = `${((wordIndex + 1) / words.length) * 100}%`;

  function handleNextWord() {
    if (isLastWord) {
      navigation.navigate("Question", { questionIndex: 0 });
      return;
    }

    navigation.push("LearnWord", { wordIndex: wordIndex + 1 });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesome6 name="angle-left" size={32} color={COLORS.black} />
          </Pressable>

          <BaseText style={styles.progressText}>
            {wordIndex + 1}/{words.length} word
          </BaseText>
        </View>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: progress }]} />
        </View>

        <View style={styles.wordSection}>
          <DisplayText>{currentWord.word}</DisplayText>

          <View style={styles.pronunciationRow}>
            <BaseText style={styles.pronunciation}>
              {currentWord.pronunciation}
            </BaseText>

            <Pressable style={styles.audioButton}>
              <FontAwesome6 name="volume-high" size={20} color={COLORS.white} />
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <BaseText style={styles.sectionTitle}>
            {currentWord.partOfSpeech}
          </BaseText>

          <HeaderText style={styles.definition}>
            {currentWord.definition}
          </HeaderText>

          <HeaderText style={styles.translation}>
            {currentWord.translation}
          </HeaderText>
        </View>

        <View style={styles.section}>
          <BaseText style={styles.sectionTitle}>Example</BaseText>

          {currentWord.examples.map((example) => (
            <HeaderText key={example} style={styles.example}>
              {example}
            </HeaderText>
          ))}
        </View>

        <PrimaryButton
          title={isLastWord ? "Start Quiz" : "Next Word"}
          onPress={handleNextWord}
          style={styles.nextButton}
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
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 48,
    paddingBottom: 60,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  progressText: {
    color: "#7A7A7A",
  },

  progressBar: {
    height: 28,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
    overflow: "hidden",
    marginBottom: 48,
  },

  progressFill: {
    height: "100%",
    backgroundColor: COLORS.black,
    borderRadius: 999,
  },

  wordSection: {
    marginBottom: 56,
  },

  pronunciationRow: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  pronunciation: {
    color: "#7A7A7A",
  },

  audioButton: {
    width: 56,
    height: 56,
    borderRadius: 999,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
  },

  section: {
    marginBottom: 52,
    gap: 16,
  },

  sectionTitle: {
    color: "#7A7A7A",
  },

  definition: {
    lineHeight: 38,
  },

  translation: {
    marginTop: 10,
  },

  example: {
    lineHeight: 42,
  },

  nextButton: {
    marginTop: "auto",
  },
});
