import React from "react";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";
import { Loading } from "./src/screens/Loading";
import { AppRouter } from "./src/routers/app.routes";
import { Routes } from "./src/routers";
import { AppProvider } from "./src/context/contextapi";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
