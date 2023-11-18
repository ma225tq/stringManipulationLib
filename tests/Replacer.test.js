import { Replacer } from '../src/Replacer';

describe('Replacer', () => {
	let replacer;

	beforeEach(() => {
		replacer = new Replacer();
	});

	describe('replaceChar', () => {
		test('should replace a specific character in a string with a new character', () => {
			expect(replacer.replaceChar('hello world', 'l', 'x')).toBe('hexxo worxd');
		});

		test('should throw an error if string is not a string', () => {
			expect(() => replacer.replaceChar(123, 'l', 'x')).toThrow(new Error('string must be a string'));
		});

		test('should throw an error if string is empty', () => {
			expect(() => replacer.replaceChar('', 'l', 'x')).toThrow(new Error('string must not be empty'));
		});

		test('should throw an error if charToReplace is not a string', () => {
			expect(() => replacer.replaceChar('hello', 123, 'x')).toThrow(new Error('charToReplace must be a string'));
		});

		test('should throw an error if charToReplace is not a single character', () => {
			expect(() => replacer.replaceChar('hello', 'ab', 'x')).toThrow(new Error('charToReplace must be a single character'));
		});

		test('should throw an error if newChar is not a string', () => {
			expect(() => replacer.replaceChar('hello', 'l', 123)).toThrow(new Error('newChar must be a string'));
		});

		test('should throw an error if newChar is not a single character', () => {
			expect(() => replacer.replaceChar('hello', 'l', 'xy')).toThrow(new Error('newChar must be a single character'));
		});
	});
});
