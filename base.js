module.exports = {
    'parser': 'babel-eslint',             //     https://github.com/babel/babel-eslint
                                        //     Set these to true or false, depending on your usage
    'ecmaFeatures': {
        'arrowFunctions': true,
        'blockBindings': true,
        'classes': true,
        'defaultParams': true,
        'destructuring': true,
        'forOf': true,
        'generators': false,
        'modules': true,
        'objectLiteralComputedProperties': true,
        'objectLiteralDuplicateProperties': false,
        'objectLiteralShorthandMethods': true,
        'objectLiteralShorthandProperties': true,
        'spread': true,
        'superInFunctions': true,
        'templateStrings': true
    },
    'extends': [
        '@porch/eslint-config-porch/env',
        '@porch/eslint-config-porch/rules/best-practices',
        '@porch/eslint-config-porch/rules/import',
        '@porch/eslint-config-porch/rules/mocha',
        '@porch/eslint-config-porch/rules/possible-errors',
        '@porch/eslint-config-porch/rules/strict',
        '@porch/eslint-config-porch/rules/style',
        '@porch/eslint-config-porch/rules/variables'
    ],
    'rules': {}
};
