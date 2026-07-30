import { useAuth } from "../Context/AuthContext";
import { useApp } from "../Context/AppContext";

import LoadingScreen from "../Components/LoadingScreen";

import AuthStack from "./AuthStack";
import MainTabs from "./MainTabs";

import OnboardingFlow from "../Flows/Onboarding/OnboardingFlow";

export default function RootNavigator() {
  const { user, loading } = useAuth();
  const { hasSeenOnboarding } = useApp();

  if (loading || hasSeenOnboarding === null) {
    return <LoadingScreen />;
  }

  if (!hasSeenOnboarding) {
    return <OnboardingFlow />;
  }

  if (!user) {
    return <AuthStack />;
  }

  return <MainTabs />;
}
