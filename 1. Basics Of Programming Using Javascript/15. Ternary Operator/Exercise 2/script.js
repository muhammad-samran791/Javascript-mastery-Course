const Eligiblity = (age) => {
  return age >= 18 ? "Eligible to Vote" : age >= 10 ? "Teenager" : "Child";
};

console.log(Eligiblity(5));
