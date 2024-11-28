import React from 'react';
import { Text as RNText, StyleSheet, TextStyle } from 'react-native';
import { scale } from 'utils';

interface Props {
    children?: any;
    numberOfLines?: number;
    style?: TextStyle | TextStyle[];
    type?:
    | 'heading' //h1
    | 'heading_detail' //h2
    | 'subheading' //h3
    | 'body'
    | 'label'
}
const getFontSize = (type: string | undefined) => {
    switch (type) {
        case "heading":
            return scale(20);
        case "heading_detail":
            return scale(18);
        case "subheading":
            return scale(17);
        case "body":
            return scale(16);
        default:
            return scale(14);
    }
}
const Text: React.FC<Props> = (props) => {
    const {
        children,
        numberOfLines,
        style,
        type
    } = props;
    return (
        <RNText numberOfLines={numberOfLines ? numberOfLines : undefined}
            style={[styles.default, style, { fontSize: getFontSize(type) }]}
        >
            {children}
        </RNText>
    )
}

export default Text;

const styles = StyleSheet.create({
    default: {
        fontFamily: "OpenSans",

    }
});

// Tiêu đề (Heading):

// Tiêu đề lớn (H1): 28-32px
// Tiêu đề phụ (H2): 24-28px
// Tiêu đề nhỏ (H3): 20-24px
// Nội dung chính (Body):

// 16-18px (khuyến nghị)
// 14-16px (có thể chấp nhận được, nhưng cần thận trọng)
// Nội dung phụ (Subtext, Caption, Label):

// 12-14px
// Các thành phần khác:

// Nút bấm: 14-16px
// Nhãn (trong form): 12-14px