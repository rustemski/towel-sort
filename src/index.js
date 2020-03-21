module.exports = function towelSort (matrix) {
  var arr = [];

  if (typeof(matrix) == 'undefined') {
    return arr;
  }
  for (let i=0; i < matrix.length; i++) {
    if (i%2 == 1) {
        matrix[i].sort(function(a,b) {return b-a})
    } else {
        continue 
    }
}
for (let i=0; i < matrix.length; i++) {
  for (let j=0;j< matrix[i].length; j++) {
    arr.push((matrix[i][j]))
  }
}

return arr
}

