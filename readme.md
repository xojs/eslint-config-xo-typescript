# eslint-config-xo-typescript

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for TypeScript to be used with [eslint-config-xo](https://github.com/xojs/eslint-config-xo)

**This config assumes your project is [ESM](https://nodejs.org/api/esm.html) and that you use a [strict config](https://github.com/sindresorhus/tsconfig/blob/main/tsconfig.json).**

## Install

```sh
npm install --save-dev eslint-config-xo eslint-config-xo-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Use with XO

[XO has built-in support for TypeScript](https://github.com/xojs/xo#typescript), using this package under the hood, so you do not have to configure anything.

## Standalone Usage

Add some ESLint config to your package.json (or `.eslintrc`):

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": [
			"xo",
			"xo-typescript"
		]
	}
}
```

Use the `space` sub-config if you want 2 space indentation instead of tabs:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": [
			"xo",
			"xo-typescript/space"
		]
	}
}
```

*Note:* If your `tsconfig.json` is not in the same directory as `package.json`, you will have to set the path yourself:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": [
			"xo",
			"xo-typescript"
		],
		"parserOptions": {
			"project": "some-path/tsconfig.json"
		}
	}
}
```

## Related

- [eslint-config-xo](https://github.com/xojs/eslint-config-xo) - ESLint shareable config for XO
- [XO](https://github.com/xojs/xo)
