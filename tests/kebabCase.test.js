const kebabCase = require('../src/kebabCase')

test('kebabCase should convert a string to kebab case', () => {
    expect(kebabCase('hello world')).toBe('hello-world')
    expect(kebabCase('hello world 123')).toBe('hello-world-123')
    expect(kebabCase('hello world, how are you doing?')).toBe('hello-world-how-are-you-doing')
})

test('kebabCase should throw an error if the input is not a string', () => {
    expect(() => kebabCase(123)).toThrow(new Error('Input must be a string'))
})