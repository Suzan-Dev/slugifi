## Slugifi

[![version](https://img.shields.io/npm/v/slugifi?style=flat-square)](https://www.npmjs.com/package/slugifi)
[![downloads](https://img.shields.io/npm/dm/slugifi?style=flat-square)]()
[![license](https://img.shields.io/npm/l/slugifi?style=flat-square)](http://opensource.org/licenses/MIT)

`Slugifi` is small package for creating a slug from a string.

&nbsp;

## Alert

I forgot my npm account password and can't login. so, I can't release a new version to fix a **TypeScript issue**.
TypeScript users should copy `declare module 'slugifi'` and put it in a file named **index.d.ts** inside `node_modules/slugifi` folder.
And this package is **no longer maintained**.

## Release Notes (v1.0.7)

> You can now remove special characters from string by enabling specialChars property from the options.

&nbsp;

## Installation

Npm :

```
$ npm install slugifi
```

Yarn :

```
$ yarn add slugifi
```

Pnpm :

```
$ pnpm add slugifi
```

&nbsp;

## Usage

ES6 :

```js
import slugifi from 'slugifi';

slugifi('Random text'); // Outputs: random-text
```

CommonJS :

```js
const slugifi = require('slugifi');

slugifi('Random text'); // Outputs: random-text
```

&nbsp;

## Options

```js
slugifi('some text', {
  separator: '_', // defaults to '-'
  capitalize: true, // defaults to false
  specialChars: false, // defaults to true
});
```

&nbsp;

## License

[MIT](http://opensource.org/licenses/MIT)
