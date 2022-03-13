function findLongestWordLength(str) {
  const words = str.split(" ").sort((a,b) => b.length - a.length);
  console.log(words) // [ 'jumped',
//   'quick',
//   'brown',   it is been sorted in descending order
//   'over',
//   'lazy',
//   'The',
//   'fox',
//   'the',
//   'dog' ]
  return words[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
