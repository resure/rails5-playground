import test from 'ava';
import fn from './';

// Probably should just use some integration tests here

test('title', t => {
	t.is(typeof fn, 'function');
});
