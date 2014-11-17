'use strict';

var isnumeric = require( './../lib' );

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
