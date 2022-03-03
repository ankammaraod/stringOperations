const isVowel = function (character) {
  let char = character.toLowerCase();
  return "aeiou".includes(char);
}

const countVowels = function (content) {
  let count = 0;
  for (let index = 0; index < content.length; index++) {
    if (isVowel(content[index])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("aeiou"));
console.log(countVowels("apple"));