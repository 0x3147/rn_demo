module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020, // 支持最新的 ECMAScript 版本
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect' // 自动检测所安装的 React 版本
    }
  },
  rules: {
    // 可以在这里自定义规则
    'prettier/prettier': 0,
    'no-undef': 0
  }
}
