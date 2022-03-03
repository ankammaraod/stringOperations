const reverse = function (content) {
  let reversedContent = "";
  for (let i = 0; i < content.length; i++) {
    reversedContent = content[i] + reversedContent;
  }
  return reversedContent;
}

console.log(reverse("hello"));