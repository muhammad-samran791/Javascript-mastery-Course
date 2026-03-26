const createCounter = (function () {
  let count = 0;
  return function () {
    count = count + 10;
    console.log(count);
  };
})();

createCounter();
createCounter();
createCounter();
