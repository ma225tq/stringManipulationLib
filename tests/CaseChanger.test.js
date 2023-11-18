import { CaseChanger } from '../src/CaseChanger';

describe('CaseChanger', () => {
	let caseChanger = new CaseChanger();

	

	describe('camelCase', () => {
		it('should convert a string to camel case', () => {
			expect(caseChanger.convertToCamelCase('hello world')).toBe('helloWorld');
			expect(caseChanger.convertToCamelCase('Lorem ipsum dolor sit amet')).toBe('loremIpsumDolorSitAmet');
		});

		it('should throw an error if the input is not a string', () => {
			expect(() => caseChanger.convertToCamelCase(123)).toThrow(new Error('Input must be a string'));
		});
	});

	describe('kebabCase', () => {
		it('should convert a string to kebab case', () => {
			expect(caseChanger.convertToKebabCase('hello world')).toBe('hello-world');
			expect(caseChanger.convertToKebabCase('Lorem ipsum dolor sit amet')).toBe('lorem-ipsum-dolor-sit-amet');
		});

	});

	describe('snakeCase', () => {
		it('should convert a string to snake case', () => {
			expect(caseChanger.convertToSnakeCase('hello world')).toBe('hello_world');
			expect(caseChanger.convertToSnakeCase('Lorem ipsum dolor sit amet')).toBe('lorem_ipsum_dolor_sit_amet');
		});

	});

	describe('titleCase', () => {
		it('should convert a string to title case', () => {
			expect(caseChanger.convertToTitleCase('hello world')).toBe('Hello World');
			expect(caseChanger.convertToTitleCase('an example of a title')).toBe('An Example of a Title');

			expect(caseChanger.convertToTitleCase('the wind in the willows')).toBe('The Wind in the Willows');
			expect(caseChanger.convertToTitleCase('a journey to the center of the earth')).toBe('A Journey to the Center of the Earth');
			expect(caseChanger.convertToTitleCase('And but or nor for so yet if since until when where while a an the about above after along among as at below but by down for from in into like near of off on onto out over past round since till to under up upon with')).toBe('And but or nor for so yet if since until when where while a an the about above after along among as at below but by down for from in into like near of off on onto out over past round since till to under up upon with');

		});


	});

});
