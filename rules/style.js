/**
 * Style Rules
 */
module.exports = {
  'rules': {
    'indent': [2, 4],                   // [x] http://eslint.org/docs/rules/indent
    'brace-style': [2,                  // [x] http://eslint.org/docs/rules/brace-style
      '1tbs', {
      'allowSingleLine': true
    }],
    'quotes': [
      2, 'single', 'avoid-escape'       // [x] http://eslint.org/docs/rules/quotes
    ],
    'camelcase': [2, {                  // [x] http://eslint.org/docs/rules/camelcase
      'properties': 'never'
    }],
    'comma-spacing': [2, {              // [x] http://eslint.org/docs/rules/comma-spacing
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],         // [x] http://eslint.org/docs/rules/comma-style
    'eol-last': 2,                      // [x] http://eslint.org/docs/rules/eol-last

                                        //     TODO: This change is coming.
    'func-names': 0,                    // [x] http://eslint.org/docs/rules/func-names
    'key-spacing': [2, {                // [x] http://eslint.org/docs/rules/key-spacing
        'beforeColon': false,
        'afterColon': true
    }],
    'new-cap': [0, {                    // [x] http://eslint.org/docs/rules/new-cap
      'newIsCap': true
    }],
    'no-multiple-empty-lines': [2, {    // [x] http://eslint.org/docs/rules/no-multiple-empty-lines
      'max': 2
    }],
    'no-nested-ternary': 2,             // [x] http://eslint.org/docs/rules/no-nested-ternary
    'no-new-object': 2,                 // [x] http://eslint.org/docs/rules/no-new-object
    'no-spaced-func': 2,                // [x] http://eslint.org/docs/rules/no-spaced-func
    'no-trailing-spaces': 2,            // [x] http://eslint.org/docs/rules/no-trailing-spaces
    'no-extra-parens': [2,              // [x] http://eslint.org/docs/rules/no-extra-parens
        'functions'],
    'no-mixed-spaces-and-tabs': 2,      // [x] http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-underscore-dangle': 0,          // [x] http://eslint.org/docs/rules/no-underscore-dangle
    'one-var': [2, 'never'],            // [x] http://eslint.org/docs/rules/one-var
    'padded-blocks': [0, 'never'],      // [x] http://eslint.org/docs/rules/padded-blocks
    'semi': [2, 'always'],              // [x] http://eslint.org/docs/rules/semi
    'semi-spacing': [2, {               // [x] http://eslint.org/docs/rules/semi-spacing
      'before': false,
      'after': true
    }],
    'space-after-keywords': 2,          // [x] http://eslint.org/docs/rules/space-after-keywords
    'space-before-blocks': 2,           // [x] http://eslint.org/docs/rules/space-before-blocks
    'space-before-function-paren': [2,  // [x] http://eslint.org/docs/rules/space-before-function-paren
    {
        'anonymous': 'always',
        'named': 'never'
    }],
    'space-infix-ops': 2,               // [x] http://eslint.org/docs/rules/space-infix-ops
    'space-return-throw-case': 2,       // [x] http://eslint.org/docs/rules/space-return-throw-case
    'spaced-comment': 2                 // [x] http://eslint.org/docs/rules/spaced-comment
  }
};
