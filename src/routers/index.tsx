import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppContext } from '../context/contextapi';
import { AuthRoutes } from './auth.routes';
import { AppRouter } from './app.routes';


export function Routes(){
  
    const { signedIn } = useContext(AppContext)
  
  return(
    <NavigationContainer>
      {signedIn ? <AppRouter/> : <AuthRoutes />}
    </NavigationContainer>
  );
}