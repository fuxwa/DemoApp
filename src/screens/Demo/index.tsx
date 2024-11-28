
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Header, Text } from 'components';
import { routes } from 'navigation';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const DemoScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <Header back text="Demo" />
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text type='heading'>Demo Screen</Text>
            </View>
        </View>
    )
}

export default DemoScreen;