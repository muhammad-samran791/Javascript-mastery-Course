const countEvenAndOdd = (num) => {
  let evenCount = 0;
  let oddCount = 0;
  num = Math.abs(num);
  while (num > 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);

    if (lastDigit % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  return { odd: oddCount, even: evenCount };
};
console.log(countEvenAndOdd(-5201984));
