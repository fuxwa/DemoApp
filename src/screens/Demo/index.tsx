
import { useNavigation } from '@react-navigation/native';
import { Text } from 'components';
import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale, width } from 'utils';

const DemoScreen = () => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets();
    const [tab, setTab] = useState(0);
    const Tab = ({ title, headerHeight }) => {

        const scrollHandler = useAnimatedScrollHandler((event) => {
            headerHeight.value = withTiming(
                Math.max(160 - event.contentOffset.y, 75),
                { duration: 100 }
            );
        });

        return (
            <Animated.View style={[styles.tab]}>
                <Animated.ScrollView
                    onScroll={scrollHandler}
                    scrollEventThrottle={16}
                    contentContainerStyle={{}}
                >
                    <Text style={{ color: "white" }}>{title}</Text>
                    <Text style={{ padding: scale(20), color: "white" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </Text>
                </Animated.ScrollView>
            </Animated.View>
        );
    };

    const headerHeight = useSharedValue(75);
    const animatedHeaderStyle = useAnimatedStyle(() => {
        return {
            height: headerHeight.value,
        };
    });
    const scrollViewRef = useRef(null);

    const goToPage = (pageIndex: number) => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({
                x: pageIndex * width,
                animated: true,
            });
        }
    };
    return (
        <View style={{ flex: 1 }}>
            {/* Header */}
            <Animated.View style={[{}, animatedHeaderStyle]}>
                <LinearGradient
                    colors={['#1c3295', '#122282', '#0c1757']}
                    style={[{ flex: 1, paddingTop: insets.top, }]}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <View style={styles.container}>
                        <TouchableOpacity style={{ width: width * 1 / 10, alignItems: "flex-start" }} onPress={() => {
                            navigation.goBack();
                        }}>
                            <Ionicons name="chevron-back-outline" color={"white"} size={scale(25)} />
                        </TouchableOpacity>
                        <View style={{ alignItems: "center" }}>
                            <Text type='subheading' style={{ color: "white", fontWeight: "600" }}>Header</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Ionicons name="search-outline" style={{ right: scale(10) }} color={"white"} size={scale(25)} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="person-outline" color={"white"} size={scale(25)} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </LinearGradient>
            </Animated.View>
            {/* TabBar */}
            <LinearGradient
                colors={['#00000c', '#01010b', '#01010d']}
                style={[{ flex: 1, justifyContent: "center", paddingHorizontal: scale(5) }]}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={[styles.tabContainer,
                        { borderBottomWidth: tab == 0 ? 4 : 1, borderBottomColor: tab == 0 ? '#154de1' : '#12243a' }]}
                            onPress={() => {
                                setTab(0)
                                goToPage(0)
                            }}
                        >
                            <Ionicons
                                name={tab == 0 ? "information-circle" : "information-circle-outline"}
                                color={tab == 0 ? "#1a53e2" : "white"}
                                size={scale(25)}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.tabContainer,
                        { borderBottomWidth: tab == 1 ? 4 : 1, borderBottomColor: tab == 1 ? '#154de1' : '#12243a' }]}
                            onPress={() => {
                                setTab(1)
                                goToPage(1)
                            }}
                        >
                            <Ionicons
                                name={tab == 1 ? "stats-chart" : "stats-chart-outline"}
                                color={tab == 1 ? "#1a53e2" : "white"}
                                size={scale(25)}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.tabContainer,
                        { borderBottomWidth: tab == 2 ? 4 : 1, borderBottomColor: tab == 2 ? '#154de1' : '#12243a' }]}
                            onPress={() => {
                                setTab(2)
                                goToPage(2)
                            }}
                        >
                            <Ionicons
                                name={tab == 2 ? "trophy" : "trophy-outline"}
                                color={tab == 2 ? "#1a53e2" : "white"}
                                size={scale(25)}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* TabBody */}
                <Animated.ScrollView
                    ref={scrollViewRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(event) => {
                        const page = Math.round(event.nativeEvent.contentOffset.x / width)
                        setTab(page)
                    }}
                >
                    <Tab title="Tab 1" headerHeight={headerHeight} />
                    <Tab title="Tab 2" headerHeight={headerHeight} />
                    <Tab title="Tab 3" headerHeight={headerHeight} />
                </Animated.ScrollView>
            </LinearGradient>


        </View >
    );
}


export default DemoScreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    headerContent: {
        width,
        flexDirection: "row"
    },
    headerText: {
        fontSize: 20,
    },
    tab: {
        width,
        flex: 1,
    },
    tabContainer: {
        width: (width / 3),
        alignItems: "center",
        paddingVertical: scale(10)
    },
    container: {
        paddingHorizontal: scale(10),
        paddingVertical: scale(15),
        flexDirection: 'row',
        justifyContent: "space-between",
    }
});