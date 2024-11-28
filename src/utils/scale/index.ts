import { Dimensions } from 'react-native';

const { width: width, height: height } = Dimensions.get('window');
const guidelineBaseWidth = 393; // Chiều rộng thiết kế gốc
const guidelineBaseHeight = 852; // Chiều cao thiết kế gốc

const widthScale = (size: number) => (width / guidelineBaseWidth) * size;
const heightScale = (size: number) => (height / guidelineBaseHeight) * size;
const scale = (size: number, factor = 0.5) => size + (widthScale(size) - size) * factor;

export { widthScale, heightScale, scale, width, height };
