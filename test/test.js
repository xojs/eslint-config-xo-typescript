import path from 'node:path'
import test from 'ava';
import {ESLint} from 'eslint';
import config from '../index.js';

const hasRule = (errors, ruleId) => errors.some(error => error.ruleId === ruleId);

async function runEslint(string, config) {
	const eslint = new ESLint({
		useEslintrc: false,
		overrideConfig: config,
	});

	const [firstResult] = await eslint.lintText(string, {filePath: path.resolve('test', '_x.ts')});

	return firstResult.messages;
}

test('main', async t => {
	const errors = await runEslint('import { Node } from "unist";\nconst foo: number = 5;', config);
	t.true(hasRule(errors, '@typescript-eslint/no-inferrable-types'), JSON.stringify(errors));
	t.false(hasRule(errors, 'import/no-unresolved'), JSON.stringify(errors));
});
