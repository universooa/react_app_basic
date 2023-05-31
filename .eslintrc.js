module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 6,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:prettier/recommended',
    ],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'no-unused-vars': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-param-reassign': 'off',
        'import/no-extraneous-dependencies': 'off',
        'global-require': 'off',
        'import/no-dynamic-require': 'off',
        'import/order': 'off',
        'no-shadow': 'off',
        'react/prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'default-param-last': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
