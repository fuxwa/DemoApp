import AsyncStorage from '@react-native-community/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'components';
import AuthStack from 'navigation/authStack';
import { routes } from 'navigation/routes';
import TabNavigation from 'navigation/tabNavigation';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Welcome } from 'screens';

const Stack = createNativeStackNavigator();
const Navigator = () => {
    const [isDataReady, setIsDataReady] = useState(false);
    const [isNewLogin, setIsNewLogin] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        getIsNewLogin();

    }, []);
    const getIsNewLogin = async () => {
        try {
            const isNewLogin = await AsyncStorage.getItem('isNewLogin');
            if (isNewLogin) {
                setIsNewLogin(true)
            }

            getIsLogin();
        } catch (error) {
            console.error('Error fetching loginType:', error);
        }
    };
    const getIsLogin = async () => {
        try {
            const isLogin = await AsyncStorage.getItem('isLogin');
            if (isLogin) {
                setIsLogin(true)
            }

        } catch (error) {
            console.error('Error fetching loginType:', error);
        } finally {
            setIsDataReady(true);
        }
    };

    if (!isDataReady) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>This is background</Text>
            </View>
        );
    }
    return (
        <Stack.Navigator
            initialRouteName={routes.NAVIGATION_WELCOME_SCREEN_PATH}
            screenOptions={() => ({
                headerShown: false,
                gestureEnabled: true,
            })}>
            {!isNewLogin && <Stack.Screen name={routes.NAVIGATION_WELCOME_SCREEN_PATH} component={Welcome} />}
            {!isLogin && <Stack.Screen name={routes.NAVIGATION_AUTHME_SCREEN_PATH} component={AuthStack} />}
            <Stack.Screen name={routes.NAVIGATION_TAB_NAVIGATION_PATH} component={TabNavigation} />
        </Stack.Navigator>
    )
}

export default Navigator;