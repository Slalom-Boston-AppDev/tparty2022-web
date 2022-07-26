module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset', 'babel-preset-react'],
      plugins: ['react-native-reanimated/plugin', 'babel-plugin-syntax-jsx'],
      env: {
        production: {
          plugins: ['react-native-paper/babel'],
        },
      },
    };
  };