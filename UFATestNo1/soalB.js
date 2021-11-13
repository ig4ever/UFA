var words1 = "palindrom"
var keyword1 = "ind"

var words2 = "abakadabra"
var keyword2 = "ab"

var words3 = "hello"
var keyword3 = ""

var words4 = "ababab"
var keyword4 = "aba"

var words5 = "aaaaaa"
var keyword5 = "aa"

var words6 = "hell"
var keyword6 = "hello"

function patternCount(words, keyword) {
  let result = 0
  let countValid = 0
  
  for (var i = 0; i < words.length; i++) {
    if (keyword.charAt(countValid) === words.charAt(i)) {
      countValid++
    } else {
      countValid = 0
    }
    
    if (keyword.length === countValid && keyword.length > 0) {
      result++
      countValid = 0
      i -= keyword.length - 1
    }
  }
  
  return result
}

console.log(
  'Input1 : "' + words1 + '", "' + keyword1 + '" \n' +
  'Output1 : ' + patternCount(words1, keyword1) + ' \n' +
  'Input2 : "' + words2 + '", "' + keyword2 + '" \n' +
  'Output2 : ' + patternCount(words2, keyword2) + ' \n' +
  'Input3 : "' + words3 + '", "' + keyword3 + '" \n' +
  'Output3 : ' + patternCount(words3, keyword3) + ' \n' +
  'Input4 : "' + words4 + '", "' + keyword4 + '" \n' +
  'Output4 : ' + patternCount(words4, keyword4) + ' \n' +
  'Input5 : "' + words5 + '", "' + keyword5 + '" \n' +
  'Output5 : ' + patternCount(words5, keyword5) + ' \n' +
  'Input6 : "' + words6 + '", "' + keyword6 + '" \n' +
  'Output6 : ' + patternCount(words6, keyword6)
)
  