const join = require('path').join

module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'array-callback-return': 'off',
    'space-before-function-paren': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.js', '.jsx']
    }],
    'react/require-default-props': 'off',
    'react/prop-types': 'warn',
    'react/forbid-prop-types': 'warn',
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': 'off',
    'global-require': 'off',
    semi: 'off',
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'no-unused-vars': ['warn', {
      'args': 'none',
      'ignoreRestSiblings': false,
      'caughtErrors': 'none'
    }],
    'no-trailing-spaces': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: join(__dirname, './builderconfig/index.js')
      }
    }
  }
}
