import test from 'ava';
import fn from './';

test('title', t => {
	t.is(fn({port: 3030}), 'we are fine');
});
