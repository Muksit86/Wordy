import React, { useState } from "react";

import QuestionCard from "../Lesson/QuestionCard";
import questions from "./placementQuestions";

export default function PlacementQuiz({ onFinish }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[questionIndex];

  function handleNext(selectedAnswer) {
    let nextScore = score;

    if (selectedAnswer === currentQuestion.answer) {
      nextScore += 1;
      setScore(nextScore);
    }

    const isLastQuestion = questionIndex === questions.length - 1;

    if (isLastQuestion) {
      onFinish(nextScore);
      return;
    }

    setQuestionIndex((prev) => prev + 1);
  }

  return (
    <QuestionCard
      question={currentQuestion}
      questionIndex={questionIndex}
      totalQuestions={questions.length}
      onNext={handleNext}
    />
  );
}
