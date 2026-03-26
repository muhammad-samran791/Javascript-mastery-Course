const text = "javascript is powerful";
const words = text.split(" ");
for (let i = 0; i < words.length; i++) {
  let reverse = "";
  for (let j = words[i].length - 1; j >= 0; j--) {
    if (j === 0) {
      reverse += words[i][j].toUpperCase();
    } else {
      reverse += words[i][j];
    }
  }

  words[i] = reverse;
}

const result = words.join(" ");
console.log(result);
