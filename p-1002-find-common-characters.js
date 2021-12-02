/**
* @param {string[]} words
* @return {string[]}
*/

function commonChars(words) {
  function letterCount(word) {
    let count = {};
    for (let index = 0; index < word.length; index += 1) {
      let letter = word[index];
      count[letter] = count[letter] || 0;
      count[letter] += 1;
    }
    return count;
  }

  let counts = words.map(word => letterCount(word));

  let firstWordCount = counts[0];
  let otherCounts = counts.slice(1);

  let firstWordLetters = Object.keys(firstWordCount);

  console.log(firstWordLetters);
}

console.log(commonChars(["bella", "trello", "bulma"]));