# eslint-config-xo-typescript

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for TypeScript

This config also includes [eslint-config-xo](https://github.com/xojs/eslint-config-xo).

**This config assumes your project is [ESM](https://nodejs.org/api/esm.html) and that you use a [strict config](https://github.com/sindresorhus/tsconfig/blob/main/tsconfig.json).**

## Install

```sh
npm install --save-dev eslint-config-xo-typescript
```

## Use with XO

[XO has built-in support for TypeScript](https://github.com/xojs/xo#typescript), using this package under the hood, so you do not have to configure anything.

## Standalone Usage

Add some ESLint config to your package.json (or `.eslintrc`):

```js
// eslint.config.js
import xoTypeScript from 'eslint-config-xo-typescript';

export default [
	...xoTypeScript,
];
```

Use the `space` sub-config if you want 2 space indentation instead of tabs:

```js
import xoTypeScriptSpace from 'eslint-config-xo-typescript/space';

export default [
	...xoTypeScriptSpace,
];
```

## Related

- [XO](https://github.com/xojs/xo)
