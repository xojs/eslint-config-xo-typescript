'use strict';
module.exports = {
	parser: 'typescript-eslint-parser',
	plugins: [
		'typescript'
	],
	settings: {
		"import/resolver": {
			"node": {
				"extensions": [
					".js",
					".jsx",
					".ts",
					".tsx"
				]
			}
		},
		"import/parsers": {
			"typescript-eslint-parser": [
				".ts",
				".tsx"
			]
		}
	},
	rules: {
		'typescript/adjacent-overload-signatures': 'error',
		'typescript/class-name-casing': 'error',
		'typescript/explicit-function-return-type': [
			'error',
			{
				allowExpressions: true
			}
		],
		'typescript/member-delimiter-style': 'error',
		'typescript/member-ordering': 'error',
		'typescript/no-angle-bracket-type-assertion': 'error',
		'typescript/no-array-constructor': 'error',
		'typescript/no-empty-interface': 'error',
		'typescript/no-inferrable-types': 'error',
		'typescript/no-namespace': 'error',
		'typescript/no-non-null-assertion': 'error',
		'typescript/no-triple-slash-reference': 'error',
		'typescript/no-type-alias': 'error',
		'typescript/no-unused-vars': 'error',
		'typescript/no-use-before-define': 'error',
		'typescript/no-var-requires': 'error',
		'typescript/prefer-namespace-keyword': 'error',
		'typescript/type-annotation-spacing': 'error'
	}
};
