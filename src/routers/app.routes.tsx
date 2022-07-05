import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { AppProvider } from '../context/contextapi';
import { HowToQuests } from '../screens/HowToQuests';
import { HowToInvestment } from '../screens/HowToInvestment';
import { HowToStore } from '../screens/HowToStore';
import { HowToNotice } from '../screens/HowToNotice';
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
                        name="HowToQuests"
                        component={HowToQuests}
                    />
                    <Tab.Screen
                        name="HowToInvestment"
                        component={HowToInvestment}
                    />
                    <Tab.Screen
                        name="HowToStore"
                        component={HowToStore}
                    />
                    <Tab.Screen
                        name="HowToNotice"
                        component={HowToNotice}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AppProvider>
    )
}