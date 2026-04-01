const getDiscount = (isMember, amount) => {
  return (
    (isMember && amount >= 1000 && "20%") ||
    ((isMember || amount >= 1000) && "10%") ||
    "0%"
  );
};

console.log(getDiscount(true, 100));
