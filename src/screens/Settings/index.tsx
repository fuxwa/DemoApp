import { Header, Text } from 'components';
import React from 'react';
import { View } from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header text="Settings" />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Settings Screen</Text>
            </View>
        </View>

    );
}

export default SettingsScreen;