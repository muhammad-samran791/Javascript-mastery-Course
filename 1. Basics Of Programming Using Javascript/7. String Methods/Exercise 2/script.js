// const text = "programming";
// let duplicateNotAllowed = "";
// for (let char of text) {
//   if (!duplicateNotAllowed.includes(char)) {
//     duplicateNotAllowed += char;
//   }
// }

// console.log(duplicateNotAllowed);

const text = "banana";
let obj = {};

for (let char of text) {
  obj[char] = text.split(char).length - 1;
}

console.log(obj);
