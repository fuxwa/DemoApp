import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Header, Text } from 'components';
import { routes } from 'navigation';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <Header text="Home" />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <TouchableOpacity onPress={() => {
                    // @ts-ignore
                    navigation.navigate({
                        name: routes.NAVIGATION_DEMO_SCREEN_PATH,
                        key: routes.NAVIGATION_DEMO_SCREEN_PATH
                    })
                }}>
                    <Text>Go to Demo Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    AsyncStorage.removeItem("isLogin");
                }}>
                    <Text>Clear is login</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

export default HomeScreen;