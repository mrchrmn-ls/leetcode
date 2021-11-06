/**
* @param {string} string
* @return {boolean}
*/
function halvesAreAlike(string) {
  let half = string.length / 2;
  let vowels = "aeiouAEIOU";
  let count1 = 0;
  let count2 = 0;

  for (index = 0; index < string.length; index += 1) {
    let letter = string[index];
    if (vowels.includes(letter) && (index < half)) count1 += 1;
    if (vowels.includes(letter) && !(index < half)) count2 += 1;
  }

  return count1 === count2;
};