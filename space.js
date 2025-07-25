import eslintConfigXo from './index.js';

export default [
	...eslintConfigXo,
	{
		rules: {
			'@stylistic/indent': [
				'error',
				2,
				{
					SwitchCase: 1,
				},
			],
		},
	},
];
