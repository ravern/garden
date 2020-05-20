module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["simple-import-sort"],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "simple-import-sort/sort": [
      "error",
      {
        groups: [["^\\u0000"], ["^@?\\w"], ["^~"], ["^\\."]],
      },
    ],
  },
  globals: {
    React: "readable",
    Promise: "readable",
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
