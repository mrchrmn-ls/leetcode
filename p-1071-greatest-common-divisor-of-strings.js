/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(str1, str2) {
  function isDivisor(fullString, divisorString) {
    return fullString.split(divisorString).join("") === "";
  }

  if (str1.length === str2.length) {
    return str1 === str2 ? str1 : "";
  }

  let long = str1.length > str2.length ? str1 : str2;
  let short = str1.length < str2.length ? str1 : str2;

  for (let divisor = 1; divisor <= short.length; divisor += 1) {
    if (short.length % divisor === 0) {
      let testLength = short.length / divisor;
      let divisorString = short.substring(0, testLength);

      if (isDivisor(long, divisorString) && isDivisor(short, divisorString)) return divisorString;
    }
  }

  return "";
};