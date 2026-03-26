const names = ["Ali", "Sara", "Raza", "Zain"];
let result = "";

for (let i = 0; i < names.length; i++) {
  if (i === names.length - 2) {
    result += names[i] + " (" + (i + 1) + ") and ";
  } else if (i === names.length - 1) {
    result += names[i] + " (" + (i + 1) + ") are online";
  } else {
    result += names[i] + " (" + (i + 1) + "), ";
  }
}

console.log(result);
