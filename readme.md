# eslint-config-xo-typescript [![Build Status](https://travis-ci.org/xojs/eslint-config-xo-typescript.svg?branch=master)](https://travis-ci.org/xojs/eslint-config-xo-typescript)

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for TypeScript to be used with [eslint-config-xo](https://github.com/xojs/eslint-config-xo)


## Install

```
$ npm install --save-dev eslint-config-xo eslint-config-xo-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```


## Usage

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


## Tip

### Use with XO

```
$ npm install --save-dev eslint-config-xo-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

```json
{
	"name": "my-awesome-project",
	"xo": {
		"extends": "xo-typescript",
		"extensions": [
			"ts"
		]
	}
}
```


## Related

- [eslint-config-xo](https://github.com/xojs/eslint-config-xo) - ESLint shareable config for XO
- [XO](https://github.com/xojs/xo)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
