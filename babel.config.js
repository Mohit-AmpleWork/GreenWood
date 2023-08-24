module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
    root: [
      "./src"
    ],
    extensions: [".js", ".ios.js", ".android.js", ".ts", ".tsx", ".json"],
    alias: {
      "src": "./src",
      "@screens": "./src/screens",
    }
  }]
  ]
};
