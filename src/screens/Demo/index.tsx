
import { useNavigation } from '@react-navigation/native';
import { Text } from 'components';
import React from 'react';
import { View } from 'react-native';
import DemoHeader from './components/DemoHeader';
const DemoScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1 }}>
            <DemoHeader />
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text type='heading'>Demo Screen</Text>

            </View>
        </View>
    )
}


export default DemoScreen;