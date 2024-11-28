import AsyncStorage from '@react-native-community/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'components';
import { routes } from 'navigation/routes';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { DemoScreen, HomeScreen, LoginScreen, Welcome } from 'screens';

const HomeStack = () => {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName={routes.NAVIGATION_HOME_SCREEN_PATH}
            screenOptions={() => ({
                headerShown: false,
                gestureEnabled: true,
            })}>

            <Stack.Screen
                name={routes.NAVIGATION_HOME_SCREEN_PATH}
                component={HomeScreen}
            />
            <Stack.Screen
                name={routes.NAVIGATION_DEMO_SCREEN_PATH}
                component={DemoScreen}
            />

        </Stack.Navigator>
    )
}
export default HomeStack;