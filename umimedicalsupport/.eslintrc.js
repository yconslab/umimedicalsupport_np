module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'eslint-plugin-prettier',
    'eslint-plugin-react',
    'plgin:prettier/recommended',
  ],
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'react/jsx-props-no-spreading': 0,
    'no-import-asign': 'error',
  },
  env: {
    jest: true,
    es6: true,
  },
};
