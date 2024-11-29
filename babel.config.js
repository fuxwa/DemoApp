module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          utils: './src/utils',
          screens: './src/screens',
          navigation: './src/navigation',
          images: './src/assets/images'
        },
      },
    ],
  ],
};
