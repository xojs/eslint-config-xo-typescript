'use strict';
const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	rules: {
		'@typescript-eslint/indent': [
			'error',
			2,
			{
				SwitchCase: 1
			}
		]
	}
};
