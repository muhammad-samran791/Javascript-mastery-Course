const palindrome = (num) => {
  if (num < 0) return false;

  let original = num;
  let reversed = 0;
  while (num > 0) {
    lastDigit = num % 10;
    reversed = reversed * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return original === reversed;
};
console.log(palindrome(-123));
console.log(palindrome(121));
console.log(palindrome(123));
