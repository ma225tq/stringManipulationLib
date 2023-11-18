import { Capitalizer } from '../src/Capitalizer';

describe('Capitalizer', () => {
	let capitalizer = new Capitalizer();



	test('capitalizeFirstLetterOfEachWord should capitalize the first letter of each word in a string', () => {
		expect(capitalizer.capitalizeFirstLetter('hello world')).toBe('Hello world');
		expect(capitalizer.capitalizeFirstLetter('lorem ipsum dolor')).toBe('Lorem ipsum dolor');
	});

	test('capitalizeFirstLetterOfEachWord should throw an error if the input is not a string', () => {
		expect(() => capitalizer.capitalizeFirstLetter(123)).toThrow(new Error('Input must be a string'));
	});
});
