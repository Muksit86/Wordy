import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "../Pages/Onboading/Onboaring";
// import PlacementTest from "../Pages/...";
// import Signup from "../Pages/Auth/Signup";
// import Login from "../Pages/Auth/Login";

const Stack = createNativeStackNavigator();

export default function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      {/* Placement Test */}
      {/* Signup */}
      {/* Login */}
    </Stack.Navigator>
  );
}
