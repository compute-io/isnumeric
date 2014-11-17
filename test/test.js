'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isnumeric = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-isnumeric', function tests() {

	it( 'should export a function', function test() {
		expect( isnumeric ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			NaN,
			true,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				isnumeric( value );
			};
		}
	});

	it( 'should compute whether each array element is numeric', function test() {
		var data, expected, actual;

		data = [ 5, 'beep', 3, 9, true, NaN, 1/0 ];

		expected = [ 1, 0, 1, 1, 0, 0, 1 ];
		actual = isnumeric( data );

		assert.deepEqual( actual, expected );
	});

});
