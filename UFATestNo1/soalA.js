var lib = require("./lib");

var array = [12,9,30,"A","M",99,82,"J","N","B"]

function sortArrayWithAlphabetFirst(array) {
  let alphabet = []
  let number = []
  let result = []

  array.forEach((item) => {
    if (typeof item === 'string') {
      alphabet.push(item)
    } else {
      number.push(item)
    }
  });
  
  result.push.apply(result, lib.quickSort(alphabet))
  result.push.apply(result, lib.quickSort(number))
  
  return result
}

console.log(
  'Before : [' + array + '] \n' +
  'After : [' + sortArrayWithAlphabetFirst(array) + ']'
)