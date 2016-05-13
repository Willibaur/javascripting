function sortSentence(str) {
  var wordsArray;
  var result = [];

  wordsArray = str.split(" ");
  wordsArray.forEach(function (word) {
    result.push(word.split("").sort().join(""));
  });

  return result.toString().replace(/,/gi, ' ');
}
 
// This function receives a string, sorts every word alphabetically and then
// returns the sentence sorted.
//
// sortSentence("this is a good test") => hist is a dgoo estt
