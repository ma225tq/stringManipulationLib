import { WordCounter } from '../src/WordCounter';

describe('WordCounter', () => {
	let wordCounter;

	beforeEach(() => {
		wordCounter = new WordCounter();
	});

	describe('countWords', () => {
		test('should count the number of words in a string', () => {
			expect(wordCounter.countWords('hello world')).toBe(2);
			expect(wordCounter.countWords('one two three four')).toBe(4);
		});

		test('should return 1 for a single word', () => {
			expect(wordCounter.countWords('hello')).toBe(1);
		});

		test('should throw an error if the input is not a string', () => {
			expect(() => wordCounter.countWords('')).toThrow(new Error('Input must not be empty'));
		});

		test('should throw an error if the input is not a string', () => {
			expect(() => wordCounter.countWords(123)).toThrow(new Error('Input must be a string'));
		});
	});
});
