function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  
  var left = []; 
  var right = [];

  for (var i = 1; i < array.length; i++) {
    if (typeof array[i] === 'string' && typeof pivot === 'string') {
      array[i].toLowerCase() < pivot.toLowerCase() ? left.push(array[i]) : right.push(array[i]);
    } else {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

module.exports = {
  quickSort: quickSort,
};