import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppContext, AppProvider } from "../context/contextapi";
import { AuthRoutes } from "./auth.routes";
import { AppRouter } from "./app.routes";

export function Routes() {
  const { signedIn } = useContext(AppContext);

  return (
    <AppProvider>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </AppProvider>
  );
}
