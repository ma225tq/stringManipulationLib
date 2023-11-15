// const capitalizeFirstLetter = require('../src/capitalizeFirstLetter')
// const truncate = require('../src/truncate')
// const removeChar = require('../src/removeChar')
// const lineBreakAfterEachWord = require('../src/lineBreakAfterEachWord')
// const makeStringNumbered = require('../src/makeStringNumbered')
// const removeWhiteSpaces = require('../src/removeWhiteSpaces')
// const titleCase = require('../src/titleCase')
// const countWords = require('../src/countWords')
// const removeSpecialChars = require('./removeSpecialChars')
// const replaceChar = require('./replaceChar')
// const moveChar = require('./moveChar')
// const alphabeticalOrder = require('./alphabeticalOrder')
// const removeLineBreaks = require('./removeLineBreaks')
// const kebabCase = require('./kebabCase')

import { CaseChanger } from './temp.js'

const balls = new CaseChanger()

string = balls.camelCase('hello world')

console.log(string)

