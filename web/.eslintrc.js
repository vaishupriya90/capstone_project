// {
//     "extends": [
//       "plugin:cypress/recommended"
//     ]
//   }

module.exports = {
  env: {
    browser: true,
    jest: true,
    'cypress/globals': true,
  },
  extends: [
    'airbnb',
  ],
  plugins: [
    'cypress',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.js', '**/*.test.jsx', '**/*_def.js', 'cypress/**/**'] }],
    'no-param-reassign': ['error', { props: false }],
    'jsx-a11y/label-has-associated-control': [
      'warn',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'warn',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      { custom: 'ignore' },
    ],
  },
};
