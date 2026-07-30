import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  useFonts,
  Lexend_400Regular,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";
import { BricolageGrotesque_700Bold } from "@expo-google-fonts/bricolage-grotesque";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AppProvider } from "./Context/AppContext";
import { AuthProvider } from "./Context/AuthContext";
import RootNavigator from "./Navigation/RootNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_700Bold,
    BricolageGrotesque_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <AppProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </GestureHandlerRootView>
      </AppProvider>
    </AuthProvider>
  );
}
