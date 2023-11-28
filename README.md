# String Manipulation

*String Manipulation* (name change incoming) is a lightweight library for some common string manipulation tasks.

It's yet to be published on npm so it's used by downloading or cloning the Github repo.

### Features

**alphabeticalOrder** - Sort an array of strings by the first letter of each string\
**capitalizeFirstLetter** - Capitalize The First Letter Of Every Word\
**countWords** - Count the words in a string\
**lineBreakAfterEachWord** - Add a line break after each word\
**moveChar** - Move a character a number of steps\
**numberedList** - Add a number before each line\
**removeChar** - Remove a select character from a string\
**removeSpecialChars** - Remove special characters from a string\
**removeWhiteSpaces** - Remove white spaces from a string\
**replaceChar** - Replace a character in a string\
**truncate** - Truncate a string\

**kebabCase** - Convert a string to kebab-case\
**camelCase** - Convert a string to camelCase\
**snakeCase** - Convert a string to snake_case\
**titleCase** Convert a String to Title Case

## Usage

Import and use the needed function.

E.g.

```javascript

const titleCase = require('../src/titleCase')

let exampleString = 'Hello world'

// titleCase(string)

console.log(titleCase(exampleString)) // Outputs: 'Hello World'

```

Some functions require two or more arguments.

```javascript

const removeChar = require('../src/removeChar)

let exampleString = 'Hello world'

// removeChar(string, charToRemove)

console.log(removeChar(exampleString, 'H')) // Outputs: 'ello world'


```

## Automatic unit tests

The unit tests are ran with the command $ npm test. A report will appear in the form of an html file.

## Bug Reporting and Contributions

**Reporting Bugs**

If you encounter any bugs, please feel free to report them in the following way:

Open an Issue: Navigate to the 'Issues' tab in this repository and click on 'New Issue'. Please provide a detailed description of the bug, including steps to reproduce it and, if neccesssary, logs or screenshots.

**Contributions**

Direct contributions are currently not accepted. Please feel free to open issues if you want to suggest features or improvements.

Thank you.

## License


The library is licensed under the MIT license, which in short means you can use, modify, and distribute the software in a commercial or non-commerical product without any restrictions.
The software does not come with any guarantees. Please see the official license description [here.](./LICENSE)
