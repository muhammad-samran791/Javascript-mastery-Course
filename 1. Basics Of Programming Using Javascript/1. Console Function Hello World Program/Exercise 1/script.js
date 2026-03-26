const setUserName = (name) => {
  if (typeof name !== "string") return "Hello World";

  const normalizedName = name.trim().toLowerCase();

  return normalizedName
    ? `Hello ${normalizedName.charAt(0).toUpperCase() + normalizedName.slice(1)}!`
    : "Hello World";
};

console.log(setUserName("samran"));
