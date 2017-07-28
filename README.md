isnumeric
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes for each array element whether an element is numeric.


## Installation

``` bash
$ npm install compute-isnumeric
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var isnumeric = require( 'compute-isnumeric' );
```

#### isnumeric( arr )

Computes for each `array` element whether an element is numeric. The function returns an `array` with length equal to that of the input `array`. Each output `array` element is either `0` or `1`. A value of `1` means that an element is numeric and `0` means that an element is __not__ numeric.

``` javascript
var out = isnumeric( [ 5, 1/0, 'beep', 3, 9, NaN, true ] );
// returns [ 1, 1, 0, 1, 1, 0, 0 ]
```


## Examples

``` javascript
var isnumeric = require( 'compute-isnumeric' );

// Simulate some data...
var data = new Array( 100 ),
	len = data.length,
	rand;

// Every so often include a non-numeric value...
for ( var i = 0; i < len; i++ ) {
	rand = Math.random()*10;
	if ( rand < 0.5 ) {
		rand = null;
	}
	data[ i ] = rand;
}

var out = isnumeric( data );

// Count the number of numeric values detected...
var sum = 0;
for ( var i = 0; i < len; i++ ) {
	sum += out[ i ];
}

console.log( 'Count: %d', sum );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-isnumeric.svg
[npm-url]: https://npmjs.org/package/compute-isnumeric

[travis-image]: http://img.shields.io/travis/compute-io/isnumeric/master.svg
[travis-url]: https://travis-ci.org/compute-io/isnumeric

[coveralls-image]: https://img.shields.io/coveralls/compute-io/isnumeric/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/isnumeric?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/isnumeric.svg
[dependencies-url]: https://david-dm.org/compute-io/isnumeric

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/isnumeric.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/isnumeric

[github-issues-image]: http://img.shields.io/github/issues/compute-io/isnumeric.svg
[github-issues-url]: https://github.com/compute-io/isnumeric/issues
