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
  rules: {
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    eqeqeq: [2, "smart"],
    "one-var-declaration-per-line": [2, "always"],
    semi: [2, "always"],
    "no-case-declarations": 0,
  },
};
