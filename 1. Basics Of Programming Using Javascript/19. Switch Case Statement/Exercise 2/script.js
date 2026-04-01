const getAccess = (role) => {
  switch (role.toLowerCase()) {
    case "admin":
      return "Full Access + Delete Access";
    case "editor":
      return "Edit + View Access";
    case "viewer":
      return "View Only";
    default:
      return "No Access";
  }
};
console.log(getAccess("vieer"));
