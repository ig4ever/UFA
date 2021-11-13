var words1 = "Hello World"

var words2 = "Bismillah"

var words3 = "MasyaAllah"

function countLetterFromWords(words) {
  let arrMap = new Map()

  words = words.replace(" ", "")
  for (var i = 0; i < words.length; i++) {
    arrMap.set(words.charAt(i), arrMap.has(words.charAt(i)) ? arrMap.get(words.charAt(i)) + 1 : 1)
  }

  let result = new Map([...arrMap.entries()].sort((a, b) => {
    return (a[0] + '').localeCompare((b[0] + ''), undefined, { caseFirst: 'upper', sensitivity: 'case' });
  }))
  
  return result
}

console.log(
  'Input1 : "' + words1 + ' \n' +
  'Output1 : '
)
console.log(countLetterFromWords(words1))

console.log(
  '\nInput2 : "' + words2 + ' \n' +
  'Output2 : '
)
console.log(countLetterFromWords(words2))

console.log(
  '\nInput3 : "' + words3 + ' \n' +
  'Output3 : '
)
console.log(countLetterFromWords(words3))