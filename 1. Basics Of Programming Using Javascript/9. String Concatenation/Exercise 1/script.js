const users = ["Ali", "Sara", "Ahmed", "Zara"];
let result = "";
for (let i = 0; i < users.length; i++) {
  if (i === users.length - 1) {
    result += users[i] + " " + "is online";
  } else {
    result += users[i] + " " + "is online," + " ";
  }
}
console.log(result);
