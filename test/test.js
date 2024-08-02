import test from 'ava';
import {ESLint} from 'eslint';
import config from '../index.js';

const hasRule = (errors, ruleId) => errors.some(error => error.ruleId === ruleId);

async function runEslint(string, config) {
	const eslint = new ESLint({
		overrideConfigFile: true,
		overrideConfig: config,
	});

	const [firstResult] = await eslint.lintText(string, {filePath: 'test/test.js'});

	return firstResult.messages;
}

test('main', async t => {
	const errors = await runEslint('const foo: number = 5;\n', config);
	t.true(hasRule(errors, '@typescript-eslint/no-inferrable-types'), JSON.stringify(errors));
	t.is(errors.length, 1);
});
