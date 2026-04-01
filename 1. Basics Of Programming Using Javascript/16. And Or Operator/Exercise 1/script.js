const access = (role, isLoggedIn) => {
  return (
    (isLoggedIn && role === "admin" && "Full Access") ||
    (isLoggedIn && role === "user" && "Limited Access") ||
    "No Access"
  );
};
console.log(access("admin", true));
