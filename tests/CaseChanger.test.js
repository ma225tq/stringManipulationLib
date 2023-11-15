import { CaseChanger } from '../src/CaseChanger';

describe('CaseChanger', () => {
	let caseChanger;

	beforeEach(() => {
		caseChanger = new CaseChanger();
	});

	describe('camelCase', () => {
		it('should convert a string to camel case', () => {
			expect(caseChanger.camelCase('hello world')).toBe('helloWorld');
			expect(caseChanger.camelCase('Lorem ipsum dolor sit amet')).toBe('loremIpsumDolorSitAmet');
		});

		it('should throw an error if the input is not a string', () => {
			expect(() => caseChanger.camelCase(123)).toThrow(new Error('Input must be a string'));
		});
	});

	describe('kebabCase', () => {
		it('should convert a string to kebab case', () => {
			expect(caseChanger.kebabCase('hello world')).toBe('hello-world');
			expect(caseChanger.kebabCase('Lorem ipsum dolor sit amet')).toBe('lorem-ipsum-dolor-sit-amet');
		});

	});

	describe('snakeCase', () => {
		it('should convert a string to snake case', () => {
			expect(caseChanger.snakeCase('hello world')).toBe('hello_world');
			expect(caseChanger.snakeCase('Lorem ipsum dolor sit amet')).toBe('lorem_ipsum_dolor_sit_amet');
		});

	});

	describe('titleCase', () => {
		it('should convert a string to title case', () => {
			expect(caseChanger.titleCase('hello world')).toBe('Hello World');
			expect(caseChanger.titleCase('an example of a title')).toBe('An Example of a Title');

			expect(caseChanger.titleCase('the wind in the willows')).toBe('The Wind in the Willows');
			expect(caseChanger.titleCase('a journey to the center of the earth')).toBe('A Journey to the Center of the Earth');
		});


	});

});
