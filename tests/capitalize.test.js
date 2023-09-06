const capitalizeString = require('../src/capitalizeString')

test('capitalizeString should capitalize the first letter of a string', () => {
  expect(capitalizeString('hello')).toBe('Hello')
  expect(capitalizeString('hElLo')).toBe('Hello')
})