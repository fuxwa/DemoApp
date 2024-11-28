import AsyncStorage from '@react-native-community/async-storage';
import { Header, Text } from 'components';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header text="Home" />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
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