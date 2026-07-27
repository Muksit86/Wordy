import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "../Pages/HomePage";
import LearnWord from "../Pages/Learning/LearnWord";
import WordQuestion from "../Pages/Learning/WordQuestion";
import SettingsPage from "../Pages/Profile/SettingsPage";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="LearnWord" component={LearnWord} />
      <Stack.Screen name="Question" component={WordQuestion} />
      <Stack.Screen name="Settings" component={SettingsPage} />
    </Stack.Navigator>
  );
}
