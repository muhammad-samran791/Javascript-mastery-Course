const users = [
  { name: "Ali", admin: true },
  { name: "Sara", admin: false },
  { name: "Raza", admin: true },
];

let admins = [];
let normalUsers = [];

for (let user of users) {
  user["admin"] ? admins.push(user["name"]) : normalUsers.push(user["name"]);
}

console.log(`
total: ${users.length} users
Admins: ${admins.length ? admins.join(", ") : "None"}
Users: ${normalUsers.length ? normalUsers.join(", ") : "None"}
`);
