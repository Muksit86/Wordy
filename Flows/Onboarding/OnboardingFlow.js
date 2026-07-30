import React, { useState } from "react";

import LanguageCard from "./LanguageCard";
import CategoryCard from "./CategoryCard";
import PlacementQuiz from "./PlacementQuiz";
import PlacementResult from "./PlacementResult";
import GoalCard from "./GoalCard";

export default function OnboardingFlow() {
  const [step, setStep] = useState("language");

  const [language, setLanguage] = useState(null);
  const [category, setCategory] = useState(null);

  const [score, setScore] = useState(0);

  const [goal, setGoal] = useState("10 words / week");

  switch (step) {
    case "language":
      return (
        <LanguageCard
          onNext={(value) => {
            setLanguage(value);
            setStep("category");
          }}
        />
      );

    case "category":
      return (
        <CategoryCard
          onNext={(value) => {
            setCategory(value);
            setStep("quiz");
          }}
        />
      );

    case "quiz":
      return (
        <PlacementQuiz
          onFinish={(value) => {
            setScore(value);
            setStep("result");
          }}
        />
      );

    case "result":
      return <PlacementResult score={score} onNext={() => setStep("goal")} />;

    case "goal":
      return (
        <GoalCard
          goal={goal}
          setGoal={setGoal}
          language={language}
          category={category}
          score={score}
        />
      );

    default:
      return null;
  }
}
