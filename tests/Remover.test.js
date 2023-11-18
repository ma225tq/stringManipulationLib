import { Remover } from '../src/Remover';

describe('Remover', () => {
	let remover;

	beforeEach(() => {
		remover = new Remover();
	});

	describe('removeChar', () => {
		test('should remove a specific character from a string', () => {
			expect(remover.removeChar('hello world', 'l')).toBe('heo word');
		});

		test('should throw an error if string is not a string', () => {
			expect(() => remover.removeChar(123, 'l')).toThrow(new Error('string must be a string'));
		});

		test('should throw an error if charToRemove is not a string', () => {
			expect(() => remover.removeChar('hello', 123)).toThrow(new Error('charToRemove must be a string'));
		});

		test('should throw an error if charToRemove is not a single character', () => {
			expect(() => remover.removeChar('hello', 'ab')).toThrow(new Error('charToRemove must be a single character'));
		});
	});

	describe('removeLineBreaks', () => {
		test('should remove line breaks from a string', () => {
			expect(remover.removeLineBreaks('hello\nworld')).toBe('hello world');
			expect(remover.removeLineBreaks('hello\r\nworld')).toBe('hello world');
		});
	});

	describe('removeSpecialChars', () => {
		test('should remove special characters from a string', () => {
			expect(remover.removeSpecialChars('hello, world!')).toBe('hello world');
		});

		test('should throw an error if the input is not a string', () => {
			expect(() => remover.removeSpecialChars(123)).toThrow(new Error('Input must be a string'));
		});
	});

	describe('removeWhiteSpaces', () => {
		test('should remove all white spaces from a string', () => {
			expect(remover.removeWhiteSpaces('hello world')).toBe('helloworld');
		});

		test('should throw an error if the input is not a string', () => {
			expect(() => remover.removeWhiteSpaces(123)).toThrow(new Error('Input must be a string'));
		});
	});
});
