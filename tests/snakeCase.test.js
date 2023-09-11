const snakeCase = require('../src/snakeCase.js')

test('snakeCase should remove all special characters from a string', () => {
  expect(snakeCase('hello world')).toBe('hello_world')
  expect(snakeCase('hello world 123')).toBe('hello_world_123')
  expect(snakeCase('hello world 123 !')).toBe('hello_world_123_')
})

test('snakeCase should throw an error if the input is not a string', () => {
  expect(() => snakeCase(123)).toThrow(new Error('Input must be a string'))
})
