const helloEngine = (object) => {
  if (
    !object ||
    typeof object !== "object" ||
    typeof object["message"] !== "string" ||
    typeof object["channel"] !== "string" ||
    typeof object["elementId"] !== "string"
  ) {
    console.log("Hello World");
    return;
  } else {
    if (object["channel"] === "console") {
      console.log(object["message"]);
    } else if (object["channel"] === "alert") {
      alert(object["message"]);
    } else if (object["channel"] === "dom") {
      const element = document.getElementById(object["elementId"]);
      if (element === null) {
        console.log("Element Does not exist");
      } else {
        element.textContent = object["message"];
      }
    } else {
      console.log("Wrong Channel Name");
    }
  }
};

helloEngine({
  message: "Hey Developer",
  channel: "alert",
  elementId: "helloEngine",
});
