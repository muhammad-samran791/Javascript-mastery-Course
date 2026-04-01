const operate = (type, a, b) => {
  switch (type.toLowerCase()) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) {
        return "Cannot divide by zero";
      } else {
        return a / b;
      }
    case "modulus":
      if (a <= 0 || b <= 0) {
        return "Only positive numbers allowed";
      } else {
        return a % b;
      }
    default:
      return "Invalid Operation";
  }
};

console.log(operate("modulus", 2, 12));
