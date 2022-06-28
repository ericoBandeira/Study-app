import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { useState } from 'react';
import { AppContext, AppProvider } from '../context/contextapi';
import { Home } from '../screens/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function AppRouter() {

    // const { signedIn } = useContext(AppContext)

    return (
        <AppProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen
                        name="Login"
                        component={Login}
                    />
                    <Stack.Screen
                        name="Cadastrar"
                        component={Register}
                    />
                    <Tab.Screen
                        name="Home"
                        component={Home}
                    />
                    <Tab.Screen
                        name="Settings"
                        component={Register}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AppProvider>
    )
}