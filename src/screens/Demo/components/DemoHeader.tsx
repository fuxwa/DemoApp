
import { useNavigation } from '@react-navigation/native';
import { Text } from 'components';
import React, { useRef } from 'react';
import { Animated, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { images, scale, width } from 'utils';

const DemoHeader = () => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets();
    const scrollY = useRef(new Animated.Value(0)).current;

    const headerHeight = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [100 + insets.top, 60 + insets.top],
        extrapolate: 'clamp',
    });

    const headerOpacity = scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [0.8, 1],
        extrapolate: 'clamp',
    });

    return (
        <LinearGradient
            colors={['#1c3295', '#122282', '#0c1757']}
            style={[{ paddingTop: insets.top }]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <View style={styles.container}>
                <TouchableOpacity style={{ width: width * 1 / 10, alignItems: "flex-start" }} onPress={() => {
                    navigation.goBack();
                }}>
                    <Ionicons name="chevron-back-outline" color={"white"} size={scale(25)} />
                </TouchableOpacity>
                <View style={{ alignItems: "center" }}>
                    <Image source={images.cristiano_ronaldo_avatar} style={{ backgroundColor: "white", borderRadius: 999, width: scale(80), height: scale(80) }} />
                    <Text type='subheading' style={{ color: "white", fontWeight: "600", marginTop: scale(10) }}>Cristiano Ronaldo</Text>

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="search-outline" style={{ right: scale(10) }} color={"white"} size={scale(25)} />
                    <Ionicons name="person-outline" color={"white"} size={scale(25)} />
                </View>

            </View>
        </LinearGradient>
    )
}

export default DemoHeader;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: scale(10),
        paddingVertical: scale(15),
        flexDirection: 'row',
        justifyContent: "space-between"
    }
});