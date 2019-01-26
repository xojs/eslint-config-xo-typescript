'use strict';
module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		jsx: true,
		project: 'tsconfig.json'
	},
	plugins: [
		'@typescript-eslint'
	],
	settings: {
		'import/resolver': {
			'node': {
				'extensions': [
					'.js',
					'.jsx',
					'.ts',
					'.tsx'
				]
			}
		},
		'import/parsers': {
			'@typescript-eslint/parser': [
				'.ts',
				'.tsx'
			]
		}
	},
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': [
			'error',
			'array'
		],
		'@typescript-eslint/ban-types': [
			'error',
			{
				types: {
					String: {
						message: 'Use `string` instead.',
						fixWith: 'string'
					},
					Number: {
						message: 'Use `number` instead.',
						fixWith: 'number'
					},
					Boolean: {
						message: 'Use `boolean` instead.',
						fixWith: 'boolean'
					},
					Object: {
						message: 'Use `object` instead.',
						fixWith: 'object'
					},
					object: 'Use `{}` instead.',
					Function: 'Use a specific function type instead, like `() => void`.',

					// This one doesn't seem to be working.
					// TODO: Report it.
					any: {
						message: 'Use `unknown` instead.',
						fixWith: 'unknown'
					},
					// TODO: Enforce `undefined` over `null` here too?
				}
			}
		],
		'camelcase': 'off',
		'@typescript-eslint/camelcase': [
			'error',
			{
				properties: 'always',
				ignoreDestructuring: false,
			}
		],
		'@typescript-eslint/class-name-casing': 'error',
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowExpressions: true
			}
		],
		'@typescript-eslint/generic-type-naming': [
			'error',
			'^T$|^[A-Z][a-zA-Z]+$'
		],
		indent: 'off',
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'@typescript-eslint/interface-name-prefix': [
			'error',
			'never'
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true
				},
				singleline: {
					delimiter: 'semi',
					requireLast: true
				}
			}
		],
		'@typescript-eslint/member-naming': [
			'error',
			{
				private: '^_'
			}
		],
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/no-angle-bracket-type-assertion': 'error',
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/no-empty-interface': 'error',

		// The `ban-types` rule handles this better
		// '@typescript-eslint/no-explicit-any': 'error',

		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-inferrable-types': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-object-literal-type-assertion': [
			'error',
			{
				allowAsParameter: true
			}
		],
		'@typescript-eslint/no-this-alias': [
			'error',
			{
				allowDestructuring: true,
			}
		],
		'@typescript-eslint/no-triple-slash-reference': 'error',

		// Disabled as I would like to *enforce* type aliases instead:
		// https://github.com/typescript-eslint/typescript-eslint/issues/142
		// '@typescript-eslint/no-type-alias': 'error',

		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				vars: 'all',
				varsIgnorePattern: '^React$',
				args: 'after-used',
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_$',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_$'
			}
		],
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-interface': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/type-annotation-spacing': 'error'
	}
};
