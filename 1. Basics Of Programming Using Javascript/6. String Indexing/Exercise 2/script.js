// const word = "JavaScript";

// const getLastChar = () => {
//   console.log(word[word.length - 1]);
// };

// getLastChar();

const word = "JavaScript";
let reverseWord = "";
for (let i = word.length - 1; i >= 0; i--) {
  reverseWord += word[i];
}

console.log(reverseWord);