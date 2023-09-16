function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}

// Test cases
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("mom")); 
console.log(isPalindrome("abba")); 
console.log(isPalindrome("a")); 
console.log(isPalindrome("hi")); 
console.log(isPalindrome("robot")); 


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
