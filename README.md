## Slugifi

[![version](https://img.shields.io/npm/v/slugifi?style=flat-square)](https://www.npmjs.com/package/slugifi)
[![downloads](https://img.shields.io/npm/dm/slugifi?style=flat-square)]()
[![license](https://img.shields.io/npm/l/slugifi?style=flat-square)](http://opensource.org/licenses/MIT)

`Slugifi` is small package for creating a slug from a string.

## Installation

Run

```
$ npm install slugifi
```

Or

```
$ yarn add slugifi
```

## Usage

ES6 :

```js
import slugifi from 'slugifi';

slugifi('some text'); // some text
```

CommonJS :

```js
const slugifi = require('slugifi');

slugifi('some text'); // some text
```

## Options

```js
slugifi('some text', {
  separator: '_', // defaults to '-'
  capitalize: true, // defaults to false
});
```

## License

[MIT](http://opensource.org/licenses/MIT)
