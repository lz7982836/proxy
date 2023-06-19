module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-essential',
    'plugin:import/recommend',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: ['@', './src'],
      },
    },
  },
};
