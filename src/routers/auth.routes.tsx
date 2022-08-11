import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { HowToQuests } from "../screens/HowToQuests";
import { HowToInvestment } from "../screens/HowToInvestment";
import { HowToStore } from "../screens/HowToStore";
import { HowToNotice } from "../screens/HowToNotice";
import { InvestmentPage } from "../screens/InvestmentPage";
import { QuestsPage } from "../screens/QuestsPage";
import { Questions } from "../screens/Questions";
import { DashboardPage } from "../screens/DashboardPage";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

const Stack = createStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastrar" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HowToQuests" component={HowToQuests} />
      <Stack.Screen name="HowToInvestment" component={HowToInvestment} />
      <Stack.Screen name="HowToStore" component={HowToStore} />
      <Stack.Screen name="HowToNotice" component={HowToNotice} />
      <Stack.Screen name="InvestmentPage" component={InvestmentPage} />
      <Stack.Screen name="QuestsPage" component={QuestsPage} />
      <Stack.Screen name="QuestionPage" component={Questions} />
      <Stack.Screen name="DashboardPage" component={DashboardPage} />
    </Stack.Navigator>
  );
}
