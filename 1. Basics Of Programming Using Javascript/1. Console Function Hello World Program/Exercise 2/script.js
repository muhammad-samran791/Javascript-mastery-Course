const sayHello = (mode) => {
  if (typeof mode !== "string") {
    console.log("Error");
    return;
  }

  const normalizedMode = mode.trim().toLowerCase();

  if (normalizedMode === "console") {
    console.log("Hello World");
  } else if (normalizedMode === "html") {
    const p = document.createElement("p");
    p.textContent = "Hello World";
    document.body.appendChild(p);
  } else {
    console.log("error");
  }
};

sayHello("html");
