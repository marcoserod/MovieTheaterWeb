module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
  },
};
