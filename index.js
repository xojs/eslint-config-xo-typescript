'use strict';
module.exports = {
	parser: require.resolve('@typescript-eslint/parser'),
	parserOptions: {
		warnOnUnsupportedTypeScriptVersion: false,
		sourceType: 'module',
		jsx: true,
		project: 'tsconfig.json'
	},
	plugins: [
		'@typescript-eslint'
	],
	settings: {
		'import/resolver': {
			node: {
				extensions: [
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
			{
				default: 'array-simple'
			}
		],
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: false,
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
					Symbol: {
						message: 'Use `symbol` instead.',
						fixWith: 'symbol'
					},
					Object: {
						message: 'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
						fixWith: 'Record<string, unknown>'
					},
					'{}': {
						message: 'The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.',
						fixWith: 'Record<string, unknown>'
					},
					object: {
						message: 'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
						fixWith: 'Record<string, unknown>'
					},
					Function: 'Use a specific function type instead, like `() => void`.',

					// TODO: Try to enable this in 2021.
					// null: {
					// 	message: 'Use `undefined` instead. See: https://github.com/sindresorhus/meta/issues/7',
					// 	fixWith: 'undefined'
					// }

					Omit: 'Prefer the `Except` type in the `type-fest` package instead as it\'s stricter.'
				}
			}
		],
		'@typescript-eslint/class-literal-property-style': [
			'error',
			'getters'
		],
		'brace-style': 'off',
		'@typescript-eslint/brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: false
			}
		],
		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'default-param-last': 'off',
		'@typescript-eslint/default-param-last': 'error',
		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': 'error',
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'allow-as-parameter'
			}
		],

		// This rule is fine. I just don't want to deal with the churn yet. Enable this in 2022.
		// '@typescript-eslint/consistent-type-definitions': [
		// 	'error',
		// 	'type'
		// ],

		// Disabled because it's too annoying. Enable it when it's more mature, smarter, and more flexible.
		// https://github.com/typescript-eslint/typescript-eslint/search?q=%22explicit-function-return-type%22&state=open&type=Issues
		// '@typescript-eslint/explicit-function-return-type': [
		// 	'error',
		// 	{
		// 		allowExpressions: true,
		// 		allowTypedFunctionExpressions: true,
		// 		allowHigherOrderFunctions: true,
		// 		allowConciseArrowFunctionExpressionsStartingWithVoid: false
		// 	}
		// ],

		// Disabled for now as it has too many false-positives.
		// https://github.com/typescript-eslint/typescript-eslint/search?q=%22explicit-module-boundary-types%22&state=open&type=Issues
		// '@typescript-eslint/explicit-module-boundary-types': [
		// 	'error',
		// 	{
		// 		allowTypedFunctionExpressions: true,
		// 		allowHigherOrderFunctions: true,
		// 		allowDirectConstAssertionInArrowFunctions: true,
		// 		shouldTrackReferences: true
		// 	}
		// ],

		'func-call-spacing': 'off',
		'@typescript-eslint/func-call-spacing': [
			'error',
			'never'
		],
		indent: 'off',
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': 'error',
		'lines-between-class-members': 'off',
		'@typescript-eslint/lines-between-class-members': [
			'error',
			'always',
			{
				// Workaround to allow class fields to not have lines between them.
				// TODO: Get ESLint to add an option to ignore class fields.
				exceptAfterSingleLine: true
			}
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
					requireLast: false
				}
			}
		],
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/method-signature-style': 'error',
		// We use `@typescript-eslint/naming-convention` in favor of `camelcase`.
		camelcase: 'off',
		// TODO: Enable this again when the following is fixed:
		// - https://github.com/typescript-eslint/typescript-eslint/issues/1483
		// - https://github.com/typescript-eslint/typescript-eslint/issues/1485
		// - https://github.com/typescript-eslint/typescript-eslint/issues/1484
		// TODO: Prevent `_` prefix on private fields when TypeScript 3.8 is out.
		// '@typescript-eslint/naming-convention': [
		// 	'error',
		// 	{
		// 		selector: 'default',
		// 		format: [
		// 			'strictCamelCase'
		// 		],
		// 		leadingUnderscore: 'allow',
		// 		trailingUnderscore: 'allow'
		// 	},
		// 	{
		// 		selector: 'typeLike',
		// 		format: [
		// 			'StrictPascalCase'
		// 		]
		// 	},
		// 	{
		// 		selector: 'variable',
		// 		types: [
		// 			'boolean'
		// 		],
		// 		format: [
		// 			'StrictPascalCase'
		// 		],
		// 		prefix: [
		// 			'is',
		// 			'has',
		// 			'can',
		// 			'should',
		// 			'will',
		// 			'did'
		// 		]
		// 	},
		// 	{
		// 		// Interface name should not be prefixed with `I`.
		// 		selector: 'interface',
		// 		filter: /^(?!I)[A-Z]/.source,
		// 		format: [
		// 			'StrictPascalCase'
		// 		]
		// 	},
		// 	{
		// 		// Type parameter name should either be `T` or a descriptive name.
		// 		selector: 'typeParameter',
		// 		filter: /^T$|^[A-Z][a-zA-Z]+$/.source,
		// 		format: [
		// 			'StrictPascalCase'
		// 		]
		// 	}
		// ],
		'@typescript-eslint/no-base-to-string': 'error',
		'no-array-constructor': 'off',
		'@typescript-eslint/no-array-constructor': 'error',
		'no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'@typescript-eslint/no-dynamic-delete': 'error',
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true
			}
		],

		// TODO: Try to enable this again in 2021.
		// Disabled for now. This is a great rule. It's just that TypeScript is not good enough yet to not use `any` in many places.
		// For example: https://github.com/sindresorhus/refined-github/pull/2391#discussion_r318995182
		// '@typescript-eslint/no-explicit-any': [
		// 	'error',
		// 	{
		// 		fixToUnknown: true,
		// 		ignoreRestArgs: true
		// 	}
		// ],

		// TODO: Try to enable this again in 2021. It's currently a bit buggy, most likely caused by TypeScript itself.
		// '@typescript-eslint/no-extra-non-null-assertion': 'error',

		// Disabled because it's buggy. It transforms `...(personalToken ? {Authorization: `token ${personalToken}`} : {})` into `...personalToken ? {Authorization: `token ${personalToken}`} : {}` which is not valid.
		// https://github.com/typescript-eslint/typescript-eslint/search?q=%22no-extra-parens%22&state=open&type=Issues
		'no-extra-parens': 'off',
		// '@typescript-eslint/no-extra-parens': [
		// 	'error',
		// 	'all',
		// 	{
		// 		conditionalAssign: false,
		// 		nestedBinaryExpressions: false,
		// 		ignoreJSX: 'multi-line'
		// 	}
		// ],

		'no-extra-semi': 'off',
		'@typescript-eslint/no-extra-semi': 'error',
		'@typescript-eslint/no-extraneous-class': [
			'error',
			{
				allowConstructorOnly: false,
				allowEmpty: false,
				allowStaticOnly: false,
				allowWithDecorator: true
			}
		],
		'no-void': [
			'error',
			{
				allowAsStatement: true // To allow `ignoreVoid` in `@typescript-eslint/no-floating-promises`
			}
		],
		'@typescript-eslint/no-floating-promises': [
			'error',
			{
				ignoreVoid: true, // Prepend a function call with `void` to mark it as not needing to be await'ed, which silences this rule.
				ignoreIIFE: true
			}
		],
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-inferrable-types': 'error',
		'@typescript-eslint/no-invalid-void-type': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksConditionals: true,

				// TODO: I really want this to be `true`, but it makes it inconvenient to use
				// async functions as event handlers... I need to find a good way to handle that.
				// https://github.com/sindresorhus/refined-github/pull/2391#discussion_r318990466
				checksVoidReturn: false
			}
		],

		// TODO: Enable this again when I target ESM output in all my TypeScript projects
		// '@typescript-eslint/no-namespace': 'error',

		// TODO: Try to enable this again in 2021. It's currently a bit buggy, most likely caused by TypeScript itself.
		// '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

		// Disabled until this is resolved:
		// https://github.com/typescript-eslint/typescript-eslint/issues/202
		// '@typescript-eslint/no-non-null-assertion': 'error',

		// TODO: Enable this again when I target ESM output in all my TypeScript projects
		// '@typescript-eslint/no-require-imports': 'error',

		'@typescript-eslint/no-this-alias': [
			'error',
			{
				allowDestructuring: true
			}
		],
		'no-throw-literal': 'off',
		'@typescript-eslint/no-throw-literal': 'error',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'no-constant-condition': 'off', // `no-unnecessary-condition` is essentially a stricter version of `no-constant-condition`.

		// TODO: Try to enable this again in 2023 *if* the following are resolved:
		// - https://github.com/microsoft/TypeScript/issues/13778 (otherwise, it will report on if checks for elements extracted from array)
		// - https://github.com/microsoft/TypeScript/issues/36393
		// - The rule needs a way to ignore runtime type-checks: https://github.com/sindresorhus/refined-github/pull/3168
		// - Run the rule on https://github.com/sindresorhus/refined-github and ensure there are no false-positives
		//
		// Also related: https://github.com/typescript-eslint/typescript-eslint/issues/1798
		// '@typescript-eslint/no-unnecessary-condition': 'error',

		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',

		// TODO: Enable these again when we can use ESM natively in Node.js. These rules cause problems with syntax like `import x = require('x');`
		// '@typescript-eslint/no-unsafe-assignment': 'error',
		// '@typescript-eslint/no-unsafe-call': 'error',
		// '@typescript-eslint/no-unsafe-member-access': 'error',
		// '@typescript-eslint/no-unsafe-return': 'error',

		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
				argsIgnorePattern: /^_/.source,
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: /^_$/.source
			}
		],

		// Disabled for now as it's marked as experimental.
		// '@typescript-eslint/no-unused-vars-experimental': 'error',

		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-readonly': 'error',

		// Disabled until https://github.com/typescript-eslint/typescript-eslint/issues/1758 is fixed. Currently, it's too difficult to accept `Map` as a parameter.
		// '@typescript-eslint/prefer-readonly-parameter-types': [
		// 	'error',
		// 	{
		// 		checkParameterProperties: true
		// 	}
		// ],

		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/prefer-ts-expect-error': 'error',
		'@typescript-eslint/promise-function-async': [
			'error',
			{
				allowAny: true
			}
		],
		quotes: 'off',
		'@typescript-eslint/quotes': [
			'error',
			'single'
		],
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/restrict-template-expressions': [
			'error',
			{
				allowNumber: true
			}
		],
		'@typescript-eslint/return-await': 'error',
		'@typescript-eslint/require-array-sort-compare': 'error',

		// Disabled for now. It's too buggy. It fails to detect when try/catch is used, await inside blocks, etc. It's also common to have async functions without await for various reasons.
		// 'require-await': 'off',
		// '@typescript-eslint/require-await': 'error',

		'space-before-function-paren': 'off',
		'@typescript-eslint/space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		semi: 'off',
		'@typescript-eslint/semi': [
			'error',
			'always'
		],

		// TODO: Reconsider enabling it again in 2021.
		// NOTE: The rule was complete redone in typescript-eslint v3, so this config needs to be changed before this is enabled.
		// Disabled for now as it's too strict.
		// Relevant discussion: https://github.com/sindresorhus/refined-github/pull/2521#discussion_r343013852
		// '@typescript-eslint/strict-boolean-expressions': [
		// 	'error',
		// 	{
		// 		allowNullable: true,
		// 		allowSafe: true
		// 	}
		// ],

		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/triple-slash-reference': [
			'error',
			{
				path: 'never',

				// Cannot enable this until `@types/node` no longer has the `NodeJS` global
				// types: 'never'
			}
		],
		'@typescript-eslint/type-annotation-spacing': 'error',

		// Disabled as it crashes on most code.
		// https://github.com/typescript-eslint/typescript-eslint/search?q=%22unbound-method%22&state=open&type=Issues
		// '@typescript-eslint/unbound-method': [
		// 	'error',
		// 	{
		// 		ignoreStatic: true
		// 	}
		// ],

		'@typescript-eslint/prefer-regexp-exec': 'error',
		'@typescript-eslint/unified-signatures': 'error',

		// TypeScript supports these features
		'no-useless-catch': 'error',

		// Disabled because of https://github.com/typescript-eslint/typescript-eslint/issues/60
		'no-redeclare': 'off'
	}
};
