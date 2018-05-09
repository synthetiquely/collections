module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [0],
    'class-methods-use-this': [0],
    'no-mixed-operators': [0],
    'default-case': [0],
    'import/no-unresolved': [0],
    'func-names': [0],
  },
};
