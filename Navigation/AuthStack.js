import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/SignUp";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
