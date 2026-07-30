import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Card from "../../Components/Card";
import PrimaryButton from "../../Constant/PrimaryButton";

import { DisplayText, BaseText } from "../../Components/Typography";

export default function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  onNext,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [questionIndex]);

  function handleNext() {
    if (!selectedAnswer) return;

    onNext(selectedAnswer);
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>
        <BaseText>
          Question {questionIndex + 1} of {totalQuestions}
        </BaseText>

        <DisplayText style={styles.question}>{question.prompt}</DisplayText>

        <View style={styles.answers}>
          {question.options.map((option) => {
            const selected = selectedAnswer === option;

            return (
              <Card
                key={option}
                onPress={() => setSelectedAnswer(option)}
                style={[styles.answerCard, selected && styles.selectedCard]}
              >
                <BaseText style={selected && styles.selectedText}>
                  {option}
                </BaseText>
              </Card>
            );
          })}
        </View>
      </View>

      <PrimaryButton
        title={
          questionIndex === totalQuestions - 1
            ? "Finish Lesson"
            : "Next Question"
        }
        disabled={!selectedAnswer}
        onPress={handleNext}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 24,
  },

  content: {
    gap: 24,
  },

  question: {
    lineHeight: 42,
  },

  answers: {
    gap: 18,
  },

  answerCard: {
    padding: 20,
  },

  selectedCard: {
    backgroundColor: "#D7E8FF",
  },

  selectedText: {
    fontWeight: "700",
  },
});
