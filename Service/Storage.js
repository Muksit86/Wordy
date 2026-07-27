import AsyncStorage from "@react-native-async-storage/async-storage";

const KEYS = {
  HAS_SEEN_ONBOARDING: "hasSeenOnboarding",
  NATIVE_LANGUAGE: "nativeLanguage",
};

// Onboarding
export async function getHasSeenOnboarding() {
  const value = await AsyncStorage.getItem(KEYS.HAS_SEEN_ONBOARDING);
  return value === "true";
}

export async function setHasSeenOnboarding() {
  await AsyncStorage.setItem(KEYS.HAS_SEEN_ONBOARDING, "true");
}

// Native Language
export async function getNativeLanguage() {
  return await AsyncStorage.getItem(KEYS.NATIVE_LANGUAGE);
}

export async function setNativeLanguage(language) {
  await AsyncStorage.setItem(KEYS.NATIVE_LANGUAGE, language);
}
