const reverse = function (content) {
  let reversedContent = "";
  for (let i = 0; i < content.length; i++) {
    reversedContent = content[i] + reversedContent;
  }
  return reversedContent;
}

const isPalindrome = function (content) {
  return content === reverse(content) ? true : false;
}

console.log(isPalindrome("madam"));