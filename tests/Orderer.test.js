import { Orderer } from '../src/Orderer';

describe('Orderer', () => {
	let orderer;

	beforeEach(() => {
		orderer = new Orderer();
	});

	describe('orderAlphabetically', () => {
		test('should order an array of strings alphabetically', () => {
			expect(orderer.orderAlphabetically(['banana', 'apple', 'cherry'])).toBe('apple\nbanana\ncherry');
		});

		test('should throw an error if the input is not an array', () => {
			expect(() => orderer.orderAlphabetically('not an array')).toThrow(new Error('array must be an array'));
		});

		test('should throw an error if the array is empty', () => {
			expect(() => orderer.orderAlphabetically([])).toThrow(new Error('array must not be empty'));
		});

		test('should throw an error if the array contains non-string elements', () => {
			expect(() => orderer.orderAlphabetically(['apple', 123, 'banana'])).toThrow(new Error('array must be an array of strings only'));
		});
	});

	describe('makeStringNumbered', () => {
		test('should add a number before each word in a string', () => {
			expect(orderer.makeStringNumbered('one two three')).toBe('1. one\n2. two\n3. three');
		});

		test('should throw an error if the input is not a string', () => {
			expect(() => orderer.makeStringNumbered(123)).toThrow(new Error('Input must be a string'));
		});
	});
});
