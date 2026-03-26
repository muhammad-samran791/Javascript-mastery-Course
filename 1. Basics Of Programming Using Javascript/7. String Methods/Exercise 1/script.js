// const text = "   javascript is awesome   ";
// const spaceRemove = text.trim();
// const words = spaceRemove.split(" ");
// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
// }

// const result = words.join(" ");
// console.log(result);



const text = "  hello   world   javascript  "
const words = text.trim().split(" ").filter(word => word !== '')

for (let i = 0; i < words.length; i++){
  words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
}

const result = words.join(" ")

console.log(result)