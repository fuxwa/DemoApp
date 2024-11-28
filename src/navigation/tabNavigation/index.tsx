import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routes } from 'navigation/routes';
import React from 'react';
import { HomeScreen, SettingsScreen } from 'screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            gestureEnabled: true,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home-outline'
                        : 'home-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'cog-outline' : 'cog-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName ?? "home-outline"} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name={"Home"} component={HomeScreen} />
            <Tab.Screen name={"Settings"} component={SettingsScreen} />
        </Tab.Navigator>
    )
}
export default TabNavigation;