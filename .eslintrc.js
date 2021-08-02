// prettier-ignore
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],

  // prettier-ignore
  rules: {
    "indent": [
      2,
      2,
      {
          "SwitchCase": 1
      }
  ],
  "quotes": ["error", "double"],
  "semi": [2, "always"],
  "space-before-function-paren": [2, "never"],
  "comma-dangle": [2, "always-multiline"],
  "no-unused-vars": [
    "error",
    {
        "varsIgnorePattern": "^[A-Z]"
    }
  ],
  "multiline-ternary": [ "warn", "never" ],
  },
};
