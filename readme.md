# is-defined [![Build Status](https://travis-ci.org/bendrucker/is-defined.svg?branch=master)](https://travis-ci.org/bendrucker/is-defined)

> Check if an identifier is defined


## Install

```
$ npm install --save is-defined
```


## Usage

is-defined generates a code string, not the actual boolean result.

```js
var isDefined = require('is-defined')

isDefined('window')
//=> typeof window !== 'undefined'
```

## API

#### `isDefined(identifier)` -> `string`

##### identifier

*Required*  
Type: `string`

A JavaScript identifier.


## License

MIT © [Ben Drucker](http://bendrucker.me)
