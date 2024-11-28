import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Header, Text } from 'components';
import { routes } from 'navigation';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <Header text="Login" />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>LoginScreen</Text>
                <TouchableOpacity onPress={() => {
                    AsyncStorage.setItem("isLogin", "true")
                    // @ts-ignore
                    navigation.navigate({
                        name: routes.NAVIGATION_TAB_NAVIGATION_PATH,
                        key: routes.NAVIGATION_TAB_NAVIGATION_PATH
                    })

                }}>
                    <Text>Go to Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    AsyncStorage.removeItem("isNewLogin");
                }}>
                    <Text>Clear is new login</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
}

export default LoginScreen;