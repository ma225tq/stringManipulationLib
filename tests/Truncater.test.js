import { Truncater } from '../src/Truncater';

describe('Truncater', () => {
	let truncater;

	beforeEach(() => {
		truncater = new Truncater();
	});

	describe('truncate', () => {
		test('should truncate a string to a specified length and append ellipsis', () => {
			expect(truncater.truncate('hello world', 5)).toBe('hello...');
			expect(truncater.truncate('JavaScript', 4)).toBe('Java...');
		});

		test('should return the same string with ellipsis if length is equal or greater than string length', () => {
			expect(truncater.truncate('hello', 5)).toBe('hello...');
			expect(truncater.truncate('hello', 10)).toBe('hello...');
		});

		test('should throw an error if the input is not a string', () => {
			expect(() => truncater.truncate(123, 5)).toThrow(new Error('Input must be a string'));
		});

		test('should throw an error if length is not a number', () => {
			expect(() => truncater.truncate('hello', '5')).toThrow(new Error('Length must be a number'));
		});

		test('should throw an error if length is not a positive number', () => {
			expect(() => truncater.truncate('hello', -5)).toThrow(new Error('Length must be a positive number'));
		});
	});
});
