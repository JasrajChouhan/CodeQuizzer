import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			'plugin:prettier/recommended', // Add Prettier recommended config
			prettierConfig, // Disables ESLint rules that conflict with Prettier
		],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			prettier, // Add Prettier as a plugin
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'prettier/prettier': 'warn', // Add Prettier rule to ESLint
		},
	},
);
