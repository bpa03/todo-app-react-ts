module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
    ],
    'import/no-unresolved': [0],
    'import/extensions': [0, { ts: 'never', tsx: 'never' }],
    'react/react-in-jsx-scope': [0],
    'no-use-before-define': [2, { variables: false }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    quotes: [1, 'single'],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
