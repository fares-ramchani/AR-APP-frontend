const {wrapWithReanimatedMetroConfig} = require('react-native-reanimated/metro-config');
const {getDefaultConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = wrapWithReanimatedMetroConfig({
  ...defaultConfig,
  // autres configurations si nécessaire
});
