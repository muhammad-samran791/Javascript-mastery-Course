const getDayType = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return "Weekday";
    case "saturday":
    case "sunday":
      return "weekend";
    default:
      return "Invalid Day";
  }
};

console.log(getDayType("sunday"));
