import AsyncStorage from '@react-native-community/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'components';
import { routes } from 'navigation/routes';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { LoginScreen, Welcome } from 'screens';

const AuthStack = () => {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
                gestureEnabled: true,
            })}>

            <Stack.Screen
                name={routes.NAVIGATION_AUTHME_LOGIN_SCREEN_PATH}
                component={LoginScreen}
            />
        </Stack.Navigator>
    )
}
export default AuthStack;