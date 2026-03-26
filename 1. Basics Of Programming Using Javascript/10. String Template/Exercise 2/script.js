const users = [
  { name: "Ali", admin: true },
  { name: "Sara", admin: false },
  { name: "Raza", admin: true },
];

for (let user of users) {
  console.log(`Hello ${user["name"]} ${user["admin"] ? "(ADMIN)" : ""}`);
}
