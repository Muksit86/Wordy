import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Pressable, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  DisplayText,
  HeaderText,
  BaseText,
  SubHeaderText,
} from "../../Components/Typography";
import PrimaryButton from "../../Constant/PrimaryButton";
import { COLORS } from "../../Constant/Colors";
import LessonHeader from "../../Components/LessonHeader";

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
        <LessonHeader
          current={questionIndex + 1}
          total={questions.length}
          progress={progress}
        />

        <HeaderText style={{ marginTop: 16 }}>
          {currentQuestion.prompt}
        </HeaderText>

        <View style={styles.answers}>
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === option;

            return (
              <Pressable
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

                <BaseText style={styles.answerText}>{option}</BaseText>
              </Pressable>
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
    paddingBottom: 60,
    flexGrow: 1,
  },

  answers: {
    marginTop: 48,
    gap: 24,
    fontWeight: "700",
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
