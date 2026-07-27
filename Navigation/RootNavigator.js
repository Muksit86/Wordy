import { useAuth } from "../Context/AuthContext";
import { useApp } from "../Context/AppContext";
import LoadingScreen from "../Components/LoadingScreen";
import OnboardingStack from "./OnboardingStack";
import AuthStack from "./AuthStack";
import MainTabs from "./MainTabs";

export default function RootNavigator() {
  const { user, loading } = useAuth();
  const { hasSeenOnboarding } = useApp();

  if (loading || hasSeenOnboarding === null) {
    return <LoadingScreen />;
  }

  if (!hasSeenOnboarding) {
    return <OnboardingStack />;
  }

  if (!user) {
    return <AuthStack />;
  }

  return <MainTabs />;
}
