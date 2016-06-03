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
        'eslint-config-porch/env',
        'eslint-config-porch/rules/best-practices',
        'eslint-config-porch/rules/import',
        'eslint-config-porch/rules/mocha',
        'eslint-config-porch/rules/possible-errors',
        'eslint-config-porch/rules/strict',
        'eslint-config-porch/rules/style',
        'eslint-config-porch/rules/variables'
    ],
    'rules': {}
};
