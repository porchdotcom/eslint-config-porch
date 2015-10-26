module.exports = {
  'plugins': [
    'react'                             // [x] https://github.com/yannickcr/eslint-plugin-react
  ],
  'ecmaFeatures': {
    'jsx': true
  },
  'rules': {

/**
 * JSX style
 */
    'jsx-quotes': [                     // [x] http://eslint.org/docs/rules/jsx-quotes
      2, 'prefer-double'
    ],
    'react/display-name': 0,            // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/jsx-boolean-value': [        // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        2, 'always'
    ],
    'react/jsx-quotes': [2, 'double'],  // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-quotes.md
    'react/jsx-no-undef': 2,            // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-sort-props': 2,          // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-prop-types': 2,     // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md
    'react/jsx-uses-react': 2,          // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-vars': 2,           // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/no-did-mount-set-state': [   // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
        2, 'allow-in-func'
    ],
    'react/no-did-update-set-state': 2, // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-multi-comp': 2,           // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-unknown-property': 2,     // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/prop-types': 2,              // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/react-in-jsx-scope': 2,      // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/self-closing-comp': 2,       // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/wrap-multilines': 2,         // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
    'react/sort-comp': [2, {            // [x] https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
      'order': [
        'displayName',
        'propTypes',
        'contextTypes',
        'childContextTypes',
        'mixins',
        'statics',
        'defaultProps',
        'constructor',
        'getDefaultProps',
        'getInitialState',
        'getChildContext',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        '/^on.+$/',
        '/^get.+$/',
        '/^render.+$/',
        'render'
      ]
    }]
  }
};
