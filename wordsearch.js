"use strict";

// MATRIX TRANSPOSITION
const transpose = function(matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
    for (let j = 0; j < matrix.length; j++) {
      result[i].push(matrix[j][i]);
    }
  }
  return result;
};


const wordSearch = (letters, word) => {
  // Checking if the input word is there
  if (letters.length < 1) return  "Wordsearch is empty";
  if (word.length < 1) return "No reference word has been entered";
    
  const transposed = transpose(letters);
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transposed.map(ls => ls.join(''));
  const horizontalJoinRev = letters.map(ls => ls.reverse().join(''));
  const verticalJoinRev = transposed.map(ls => ls.reverse().join(''));

  // Go through the letters horizontally
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // Going through letters horizontally and backwards
  for (let l of horizontalJoinRev) {
    if (l.includes(word)) return true;
  }

  // Going through letters vertically
  for (let l of verticalJoin) {
     if (l.includes(word)) return true;
  }
  // Going through letters vertically and backwards
  for (let l of verticalJoinRev) {
    if (l.includes(word)) return true;
 }

  return false;
};


module.exports = wordSearch;