# eslint-config-xo-typescript [![Build Status](https://travis-ci.org/xojs/eslint-config-xo-typescript.svg?branch=master)](https://travis-ci.org/xojs/eslint-config-xo-typescript)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for TypeScript to be used with [eslint-config-xo](https://github.com/xojs/eslint-config-xo)


## Install

```
$ npm install --save-dev eslint-config-xo eslint-config-xo-typescript typescript-eslint-parser eslint-plugin-typescript
```


## Usage

Add some ESLint config to your package.json:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": ["xo", "xo-typescript"]
	}
}
```

Or to .eslintrc:

```json
{
	"extends": ["xo", "xo-typescript"]
}
```


## Tip

### Use with XO

```
$ npm install --save-dev eslint-config-xo-typescript typescript-eslint-parser eslint-plugin-typescript
```

```json
{
	"name": "my-awesome-project",
	"xo": {
		"extends": "xo-typescript"
	}
}
```


## Related

- [eslint-config-xo](https://github.com/xojs/eslint-config-xo) - ESLint shareable config for XO
- [XO](https://github.com/xojs/xo)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
