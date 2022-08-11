import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

const Stack = createStackNavigator();

export function AppRouter() {
  // const { signedIn } = useContext(AppContext)

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastrar" component={Register} />
    </Stack.Navigator>
  );
}
