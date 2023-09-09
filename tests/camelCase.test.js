const camelCase = require('../src/camelCase')

test('camelCase should convert a string to camel case', () => {
    expect(camelCase('hello world')).toBe('helloWorld')
    expect(camelCase('hello world 123')).toBe('helloWorld123')
    expect(camelCase('hello world, how are you doing?')).toBe('helloWorldHowAreYouDoing')
})

test('camelCase should throw an error if the input is not a string', () => {
    expect(() => camelCase(123)).toThrow(new Error('Input must be a string'))
})