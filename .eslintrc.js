module.exports = {
    extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['prettier', '@typescript-eslint', '@typescript-eslint/eslint-plugin', 'unused-imports'],
    globals: {
        $: true,
    },
    env: {
        browser: false,
        node: true,
        es6: true,
        jest: true,
    },
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
    ignorePatterns: ['.eslintrc.js', '**/dist/**', '**/node_modules/**', '*.json', '**/vite.config.ts'],
    rules: {
        'sort-imports': [
            'error',
            {
                ignoreDeclarationSort: true,
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                '': 'never',
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-alert': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'max-classes-per-file': 'off',
        'class-methods-use-this': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'import/no-extraneous-dependencies': 'off',
        'prettier/prettier': [
            'error',
            {
                usePrettierrc: true,
            },
        ],
        'no-underscore-dangle': [
            'error',
            {
                allowAfterThis: true,
            },
        ],
        'import/prefer-default-export': 0,
        'global-require': 'off',
        'no-console': 0,
        'no-plusplus': 0,
        'no-alert': 0,
        'no-tabs': 1,
        '@typescript-eslint/lines-between-class-members': [
            'error',
            {
                exceptAfterOverload: false,
            },
        ],
        'camel-case': 0,
        '@typescript-eslint/no-inferrable-types': 'off',
        camelcase: 0,
        'no-promise-executor-return': 0,
        'no-async-promise-executor': 0,
        'no-param-reassign': 'off',
        'no-nested-ternary': 'off',
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],
        curly: ['error', 'multi-or-nest'],
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': 'off',
    },
};
