const discount = (isMember, purchaseAmount) => {
  return isMember && purchaseAmount >= 1000
    ? "20% Discount"
    : isMember && purchaseAmount < 1000
      ? "10% Discount"
      : !isMember && purchaseAmount >= 1000
        ? "5% Discount"
        : "No Discount";
};

console.log(discount(false, 500));