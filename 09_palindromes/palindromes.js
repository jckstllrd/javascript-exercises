const palindromes = function (word) {
  let cleanWord = stripWord(word);

  let isPalindrome = false;
  let finalWord = "";

  console.log(cleanWord);

  for (let i = cleanWord.length - 1; i >= 0; i--) {
    finalWord += cleanWord[i];
  }
  if (finalWord === cleanWord) {
    isPalindrome = true;
  }
  console.log(finalWord);

  return isPalindrome;
};

const stripWord = function (word) {
  let punctuation = /[^\w\s\']|_/g;

  let newWord = word.replace(punctuation, "").replace(/ /g, "");
  newWord = newWord.toLowerCase();
  console.log("stipped word is " + newWord);

  return newWord;
};

// Do not edit below this line
module.exports = palindromes;
