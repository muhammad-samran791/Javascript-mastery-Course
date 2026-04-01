const reversed = (num) => {
  let lastDigit;
  let reversed = 0;
  let isNagetive = num < 0;
  num = Math.abs(num);
  while (num > 0) {
    lastDigit = num % 10; // 3, 2, 1
    if (lastDigit !== 0) {
      reversed = reversed * 10 + lastDigit; // 3, 32, 321
    }
    num = Math.floor(num / 10); // 12, 1
  }
  return isNagetive ? -reversed : reversed;
};

console.log(reversed(-10023));
