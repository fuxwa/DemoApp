
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Header, Text } from 'components';
import { routes } from 'navigation';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const Welcome = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <Header text="Welcome" />
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text type='heading'>heading</Text>
                <Text type='heading_detail'>heading</Text>
                <Text type='subheading'>heading</Text>
                <Text type='body'>heading</Text>
                <Text type='label'>heading</Text>
                <TouchableOpacity onPress={() => {
                    // @ts-ignore
                    navigation.navigate({
                        name: routes.NAVIGATION_AUTHME_SCREEN_PATH,
                        key: routes.NAVIGATION_AUTHME_SCREEN_PATH
                    })
                    AsyncStorage.setItem("isNewLogin", "true");
                }}>
                    <Text type='heading'>Go to Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome;