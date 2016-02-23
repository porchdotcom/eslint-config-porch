/**
 * Variables
 */
module.exports = {
    'rules': {
        'no-shadow': 2,                     // [x] http://eslint.org/docs/rules/no-shadow
        'no-shadow-restricted-names': 2,    // [x] http://eslint.org/docs/rules/no-shadow-restricted-names
        'no-unused-vars': [2, {             // [x] http://eslint.org/docs/rules/no-unused-vars
            'vars': 'local',
            'args': 'after-used'
        }],
        'no-use-before-define': 2,          // [x] http://eslint.org/docs/rules/no-use-before-define
        'no-undef': 2                       // [x] http://eslint.org/docs/rules/no-undef
    }
};
