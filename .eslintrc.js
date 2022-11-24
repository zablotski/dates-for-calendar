module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["google"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "space-before-function-paren": 0,
    quotes: 0,
    "quote-props": 0,
    "no-var": 0,
    "one-var": 0,
    indent: 0,
    "require-jsdoc": 0,
    "object-curly-spacing": 0,
    "comma-dangle": false,
  },
};
