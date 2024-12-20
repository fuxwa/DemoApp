import { useNavigation } from '@react-navigation/native';
import { Text } from 'components';
import { Navigator, routes } from 'navigation';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, scale, width } from 'utils';
interface Props {
    text: string;
    back?: boolean;
    onBack?: () => void;
    renderRight?: any
}

const Header: React.FC<Props> = (props) => {
    const { text, back, onBack, renderRight } = props;
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            {
                back ?
                    <TouchableOpacity style={{ width: width * 1 / 10, alignItems: "center" }} onPress={() => {
                        onBack ? onBack : navigation.goBack();
                    }}>
                        <Ionicons name="arrow-back-outline" color={colors.primary} size={scale(25)} />
                    </TouchableOpacity>
                    : <View style={{ width: width * 1 / 10, height: 1, opacity: 0 }} />
            }
            <View style={{ width: width * 8 / 10, alignItems: "center" }}>
                <Text type='subheading' style={{ color: "#212B36", right: scale(18) }} numberOfLines={1}>{text}</Text>
            </View>

            {
                renderRight ?
                    <View style={{ width: width * 1 / 10 }}>
                        {renderRight}
                    </View>

                    : <View style={{ width: width * 1 / 10, height: 1, opacity: 0 }} />
            }
        </View>
    )
}

export default Header;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        // justifyContent: "space-between",
        padding: scale(10),
        backgroundColor: "white",

        shadowColor: Platform.OS === 'ios' ? '#ddd' : '#000000',
        shadowOffset: { width: 5, height: 8 },
        shadowOpacity: Platform.OS === 'ios' ? 0.5 : 8,
        shadowRadius: 6,
        elevation: 2,
        zIndex: 999,
    }
});