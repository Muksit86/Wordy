import React, { useEffect, useMemo, useState } from "react";
import { Modal, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LessonHeader from "../../Components/LessonHeader";
import ConfirmationModal from "../../Components/ConfirmModal";

import WordCard from "./WordCard";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";

import { words } from "./lessonData";
import { questions } from "./questionData";

import { COLORS } from "../../Constant/Colors";

export default function LessonModal({ visible, onClose }) {
  const [step, setStep] = useState("learn");

  const [wordIndex, setWordIndex] = useState(0);

  const [questionIndex, setQuestionIndex] = useState(0);

  const [score, setScore] = useState(0);

  const [confirmVisible, setConfirmVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      resetLesson();
    }
  }, [visible]);

  function resetLesson() {
    setStep("learn");
    setWordIndex(0);
    setQuestionIndex(0);
    setScore(0);
    setConfirmVisible(false);
  }

  function handleNextWord() {
    if (wordIndex < words.length - 1) {
      setWordIndex((prev) => prev + 1);
      return;
    }

    setConfirmVisible(true);
  }

  function startQuiz() {
    setConfirmVisible(false);
    setStep("quiz");
  }

  function handleAnswer(selectedAnswer) {
    const currentQuestion = questions[questionIndex];

    if (selectedAnswer === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      setStep("results");
    }
  }

  function handleFinish() {
    resetLesson();
    onClose();
  }

  const header = useMemo(() => {
    if (step === "learn") {
      return {
        current: wordIndex + 1,
        total: words.length,
        progress: `${((wordIndex + 1) / words.length) * 100}%`,
      };
    }

    if (step === "quiz") {
      return {
        current: questionIndex + 1,
        total: questions.length,
        progress: `${((questionIndex + 1) / questions.length) * 100}%`,
      };
    }

    return {
      current: questions.length,
      total: questions.length,
      progress: "100%",
    };
  }, [step, wordIndex, questionIndex]);

  return (
    <>
      <Modal
        visible={visible}
        animationType="slide"
        presentationStyle="fullScreen"
      >
        <SafeAreaView edges={["top"]} style={styles.container}>
          <LessonHeader
            current={header.current}
            total={header.total}
            progress={header.progress}
            onBack={handleFinish}
          />

          {step === "learn" && (
            <WordCard
              word={words[wordIndex]}
              isLastWord={wordIndex === words.length - 1}
              onNext={handleNextWord}
            />
          )}

          {step === "quiz" && (
            <QuestionCard
              question={questions[questionIndex]}
              questionIndex={questionIndex}
              totalQuestions={questions.length}
              onNext={handleAnswer}
            />
          )}

          {step === "results" && (
            <ResultCard
              score={score}
              total={questions.length}
              onCelebrate={() => console.log("Celebrate")}
              onBackHome={handleFinish}
            />
          )}
        </SafeAreaView>
      </Modal>

      <ConfirmationModal
        visible={confirmVisible}
        mood="happy"
        title="Ready for the quiz?"
        subtitle="You've finished learning the words. Let's see how much you remember."
        confirmText="Start Quiz"
        cancelText="Review Again"
        onConfirm={startQuiz}
        onCancel={() => setConfirmVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Background,
    paddingHorizontal: 20,
  },
});
