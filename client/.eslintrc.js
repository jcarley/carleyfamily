module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true,
  },
  extends: ['react-app', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        trailingComma: 'es5',
        semi: true,
        jsxSingleQuote: true,
        jsxBracketSameLine: true,
        singleQuote: true,
        arrowParens: 'always',
        useTabs: false,
        endOfLine: 'auto',
      },
    ],
  },
};
