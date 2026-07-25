import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  useFonts,
  Lexend_400Regular,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";
import { BricolageGrotesque_700Bold } from "@expo-google-fonts/bricolage-grotesque";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import HomePage from "./Pages/HomePage";
import Onboaring from "./Pages/Onboading/Onboaring";
import LearnWord from "./Pages/Learning/LearnWord";
import WordQuestion from "./Pages/Learning/WordQuestion";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_700Bold,
    BricolageGrotesque_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomePage} />

          <Stack.Screen name="Onboarding" component={Onboaring} />

          <Stack.Screen name="LearnWord" component={LearnWord} />

          <Stack.Screen name="Question" component={WordQuestion} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
