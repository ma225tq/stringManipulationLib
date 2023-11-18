import { Mover } from '../src/Mover';

describe('Mover', () => {
	let mover;

	beforeEach(() => {
		mover = new Mover();
	});

	describe('moveChar', () => {
		test('should move a character to the right by a specified number of steps', () => {
			expect(mover.moveChar('hello', 'l', 1, 'right')).toBe('heoll');
			expect(mover.moveChar('hello', 'e', 2, 'right')).toBe('hlleo');
		});

		test('should move a character to the left by a specified number of steps', () => {
			expect(mover.moveChar('hello', 'l', 1, 'left')).toBe('hlleo');
			expect(mover.moveChar('hello', 'l', 2, 'left')).toBe('llheo');
		});

		test('should throw an error if the input string is not a string', () => {
			expect(() => mover.moveChar(123, 'l', 1, 'right')).toThrow(new Error('Input must be a string'));
		});

		test('should throw an error if the character to move is not a string', () => {
			expect(() => mover.moveChar('hello', 123, 1, 'right')).toThrow(new Error('Character to move must be a string'));
		});

		test('should throw an error if steps is not a number', () => {
			expect(() => mover.moveChar('hello', 'l', 'one', 'right')).toThrow(new Error('Steps must be a number'));
		});

		test('should throw an error if steps is not a positive number', () => {
			expect(() => mover.moveChar('hello', 'l', -1, 'right')).toThrow(new Error('Steps must be a positive number'));
		});

		test('should throw an error if direction is not a string', () => {
			expect(() => mover.moveChar('hello', 'l', 1, 123)).toThrow(new Error('Direction must be a string'));
		});

		test('should throw an error if direction is not "left" or "right"', () => {
			expect(() => mover.moveChar('hello', 'l', 1, 'up')).toThrow(new Error('Direction must be either "left" or "right"'));
		});
	});
});
