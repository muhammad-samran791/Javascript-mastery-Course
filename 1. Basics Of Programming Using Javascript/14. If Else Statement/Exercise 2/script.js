let num = -2;
if (num === 0) {
  console.log("Zero");
} else if (num > 0) {
  if (num % 2 === 0) {
    console.log("Positive Even");
  } else {
    console.log("Positive Odd");
  }
} else {
  if (num % 2 === -0) {
    console.log("Negative Even");
  } else {
    console.log("Negative Odd");
  }
}
