import { Breaker } from '../src/Breaker';

describe('Breaker', () => {
	let breaker = new Breaker();


	test('insertLineBreakAfterEachWord should insert a line break after each word in a string', () => {
		expect(breaker.insertLineBreakAfterEachWord('hello world')).toBe('hello\nworld');
		expect(breaker.insertLineBreakAfterEachWord('one two three')).toBe('one\ntwo\nthree');
	});

	test('insertLineBreakAfterEachWord should throw an error if the input is not a string', () => {
		expect(() => breaker.insertLineBreakAfterEachWord(123)).toThrow(new Error('Input must be a string'));
	});
});
