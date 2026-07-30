import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "../Pages/Home/HomePage";
import ProfilePage from "../Pages/Home/ProfilePage";
import SavePage from "../Pages/Home/SavePage";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="Save" component={SavePage} />
    </Stack.Navigator>
  );
}
