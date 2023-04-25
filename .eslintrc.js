module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 6,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
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
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
