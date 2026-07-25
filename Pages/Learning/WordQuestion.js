import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { DisplayText, HeaderText, BaseText } from "../../Components/Typography";
import PrimaryButton from "../../Constant/PrimaryButton";
import { COLORS } from "../../Constant/Colors";

const questions = [
  {
    prompt: "What does 'Reluctant' mean?",
    options: [
      "Unwilling or hesitant",
      "Very excited",
      "Extremely confident",
      "Easy to understand",
    ],
  },
  {
    prompt: "What does 'Meticulous' mean?",
    options: [
      "Very careful and precise",
      "Fast and careless",
      "Loud and angry",
      "Simple and plain",
    ],
  },
  {
    prompt: "What does 'Eloquent' mean?",
    options: [
      "Clear and expressive",
      "Quiet and unsure",
      "Hard to remember",
      "Slow to react",
    ],
  },
];

const optionLabels = ["A", "B", "C", "D"];

export default function QuestionScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedOption, setSelectedOption] = useState(null);
  const questionIndex = route.params?.questionIndex ?? 0;
  const currentQuestion = questions[questionIndex] ?? questions[0];
  const isLastQuestion = questionIndex === questions.length - 1;
  const progress = `${((questionIndex + 1) / questions.length) * 100}%`;

  function handleNextQuestion() {
    if (isLastQuestion) {
      navigation.navigate("Home");
      return;
    }

    navigation.push("Question", { questionIndex: questionIndex + 1 });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome6 name="angle-left" size={32} color={COLORS.black} />
          </TouchableOpacity>

          <BaseText style={styles.questionCount}>
            {questionIndex + 1}/{questions.length} question
          </BaseText>
        </View>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: progress }]} />
        </View>

        <DisplayText>{currentQuestion.prompt}</DisplayText>

        <View style={styles.answers}>
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === option;

            return (
              <TouchableOpacity
                key={option}
                activeOpacity={0.8}
                onPress={() => setSelectedOption(option)}
                style={[
                  styles.answerCard,
                  isSelected && styles.selectedAnswerCard,
                ]}
              >
                <View
                  style={[
                    styles.letterCircle,
                    isSelected && styles.selectedLetterCircle,
                  ]}
                >
                  <HeaderText
                    style={isSelected ? styles.selectedLetterText : null}
                  >
                    {optionLabels[index]}
                  </HeaderText>
                </View>

                <HeaderText style={styles.answerText}>{option}</HeaderText>
              </TouchableOpacity>
            );
          })}
        </View>

        <PrimaryButton
          title={isLastQuestion ? "Finish" : "Next Question"}
          onPress={handleNextQuestion}
          disabled={!selectedOption}
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
    paddingHorizontal: 28,
    paddingTop: 48,
    paddingBottom: 60,
    flexGrow: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  questionCount: {
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

  answers: {
    marginTop: 48,
    gap: 24,
  },

  answerCard: {
    backgroundColor: COLORS.white,
    borderWidth: 3,
    borderColor: COLORS.black,
    borderRadius: 18,
    boxShadow: `4px 4px 0px ${COLORS.black}`,
    minHeight: 92,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  selectedAnswerCard: {
    backgroundColor: COLORS.Secondary,
  },

  letterCircle: {
    width: 60,
    height: 60,
    borderRadius: 999,
    backgroundColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
  },

  selectedLetterCircle: {
    backgroundColor: COLORS.black,
  },

  selectedLetterText: {
    color: COLORS.white,
  },

  answerText: {
    flex: 1,
  },

  nextButton: {
    marginTop: "auto",
  },
});
