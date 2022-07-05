import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
  return(
        <Navigator headerMode="none">
            <Screen
                name="Login"
                component={Login}
            />
            <Screen
                name="Cadastrar"
                component={Register}
            /> 
        </Navigator>
  )
}