const word = "JavaScript";

const getEverySecondChar = () => {
  for (let secondChar = 0; secondChar < word.length - 1; secondChar += 2) {
    console.log(word[secondChar]);
  }
};

getEverySecondChar();
