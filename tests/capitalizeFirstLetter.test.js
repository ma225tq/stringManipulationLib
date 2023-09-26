const capitalizeFirstLetter = require('../src/capitalizeFirstLetter')

test('capitalizeFirstLetter should capitalize the first letter of a string', () => {
  expect(capitalizeFirstLetter('hello')).toBe('Hello')
  expect(capitalizeFirstLetter('hElLo')).toBe('Hello')
  expect(capitalizeFirstLetter('HELLO')).toBe('Hello')
  expect(capitalizeFirstLetter('Hello world')).toBe('Hello world')
  expect(capitalizeFirstLetter('hello world')).toBe('Hello world')
})

test('capitalizeFirstLetter should throw an error if the input is not a string', () => {
    expect(() => capitalizeFirstLetter(123)).toThrow(new Error('Input must be a string'))
})

