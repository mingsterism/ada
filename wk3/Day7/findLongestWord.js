// @flow
function findLongestWord(str) {
  // 1) Seperate all the test into a list
  const wordList = str.split(' ');
  console.log(wordList);

  // 2) count the length of each word & find longest word length
  let longestWord = '';
  for (const i in wordList) {
    if (wordList[i].length > longestWord.length) {
      console.log('the word is', wordList[i], 'and length is ', wordList[i].length);
      longestWord = wordList[i];
    }
  }
  // 4) return that word
  return longestWord.length;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
