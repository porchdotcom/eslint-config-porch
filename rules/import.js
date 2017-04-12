module.exports = {
    plugins: [
        'import'
    ],
    settings: {
        'import/resolve': {
            extensions: [ '.js', '.jsx', '.json' ]
        }
    },
    rules: {
        'import/default': 0, // this does not consider module.exports to be a default, so it breaks a bunch of our libraries
        'import/export': 2,
        'import/imports-first': 2,
        'import/named': 2,
        'import/no-extraneous-dependencies': 2,
        'import/no-unresolved': 2,
        "import/no-commonjs": 2
    }
};
