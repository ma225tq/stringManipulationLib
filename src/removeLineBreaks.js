function removeLineBreaks(string) {
  return string.replace(/\r?\n|\r/g, ' ')
}

module.exports = removeLineBreaks;