import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme';
import { Home } from './src/screens/Home';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold
  })

  // if (!fontsLoaded) {
  //   return <AppLoadingPage/>
  // }

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}
