## Slugifi

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

ES6

```javascript
import slugifi from 'slugifi';

slugifi('some text'); // some text
```

CommonJS

```javascript
const slugifi = require('slugifi');

slugifi('some text'); // some text
```

## Options

```javascript
slugifi('some text', {
  separator: '_', // defaults to '-'
  capitalize: true, // defaults to false
});
```

## License

&copy; MIT [Suzan-Dev](https://github.com/Suzan-Dev)
