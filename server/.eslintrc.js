module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'camelcase': 0,
  },
};
