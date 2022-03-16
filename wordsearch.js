const transpose = function(matrix) {
    let transposedArray = [];
    for (let i = 0; i < matrix[0].length; i++) {
      transposedArray[i] = [];
      for (let j = 0; j < matrix.length; j++) {
        transposedArray[i][j] = matrix[j][i];
      }
    }
    return transposedArray;
  };
  
  const wordSearch = (letters, word) => {
    const verticalJoin = transpose(letters).map(ls => ls.join(""));
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    for (l of verticalJoin) {
      if (l.includes(word)) return true;
    }
    return false;
  };
  
  module.exports = wordSearch;