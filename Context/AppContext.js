import React, { createContext, useContext, useEffect, useState } from "react";

import {
  getHasSeenOnboarding,
  setHasSeenOnboarding,
  getNativeLanguage,
  setNativeLanguage,
} from "../Service/Storage";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [hasSeenOnboarding, setHasSeen] = useState(null);
  const [nativeLanguage, setLanguage] = useState(null);

  useEffect(() => {
    loadAppState();
  }, []);

  const loadAppState = async () => {
    try {
      const seen = await getHasSeenOnboarding();
      const language = await getNativeLanguage();

      setHasSeen(seen);
      setLanguage(language);
    } catch (error) {
      console.error("Failed to load app state:", error);
      setHasSeen(false);
      setLanguage(null);
    }
  };

  const finishOnboarding = async () => {
    await setHasSeenOnboarding();
    setHasSeen(true);
  };

  const updateNativeLanguage = async (language) => {
    await setNativeLanguage(language);
    setLanguage(language);
  };

  return (
    <AppContext.Provider
      value={{
        hasSeenOnboarding,
        nativeLanguage,
        finishOnboarding,
        updateNativeLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
