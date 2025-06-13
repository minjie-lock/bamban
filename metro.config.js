const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const BambooNativeMetro = require('@bamban/react-native')

const WithNativeMetro = BambooNativeMetro(
  (metro) => mergeConfig(
    getDefaultConfig(__dirname),
    {
      ...metro,
    }
  ),
);

module.exports = WithNativeMetro({
  input: './src/styles/tailwind.css'
})