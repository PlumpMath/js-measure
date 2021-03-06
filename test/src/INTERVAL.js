import test from 'ava' ;

import { range , reduce , map } from "@aureooms/js-itertools" ;

import { Measures } from '../../src' ;

test( "interval" , assert => {

	const interval = Measures.INTERVAL ;

	assert.deepEqual( interval.measure( [ 2 , 7 ] ) , [ 2 , 7 ] ) ;

	assert.deepEqual( interval.plus( interval.zero( ) , interval.measure( [ 2 , 7 ] ) ) , [ 2 , 7 ] ) ;
	assert.deepEqual( interval.plus( interval.measure( [ 2 , 7 ] ) , interval.zero( ) ) , [ 2 , 7 ] ) ;

	assert.deepEqual( interval.plus( interval.zero( ) , interval.zero( ) , interval.measure( [ 2 , 7 ] ) ) , [ 2 , 7 ] ) ;
	assert.deepEqual( interval.plus( interval.zero( ) , interval.measure( [ 2 , 7 ] ) , interval.zero( ) ) , [ 2 , 7 ] ) ;
	assert.deepEqual( interval.plus( interval.measure( [ 2 , 7 ] ) , interval.zero( ) , interval.zero( ) ) , [ 2 , 7 ] ) ;

	const N = 1000 ;

	assert.deepEqual( reduce( interval.plus.bind( interval ) , map( i => interval.measure( [ i , N - i ] ) , range( N ) ) , interval.zero( ) ) , [ N - 1 , N ] ) ;

} ) ;
