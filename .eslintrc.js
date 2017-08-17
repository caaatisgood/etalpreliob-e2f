const path = require('path')

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
    'space-before-function-paren': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.js', '.jsx']
    }],
    'react/require-default-props': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': 'off',
    'global-require': 'off',
    semi: 'off',
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'no-unused-vars': ['error', {
      'args': 'none',
      'ignoreRestSiblings': false,
      'caughtErrors': 'none'
    }],
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './builderconfig/webpack.config.base.js')
      }
    }
  }
}
