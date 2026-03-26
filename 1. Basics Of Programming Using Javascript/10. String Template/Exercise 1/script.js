// ye mai ne khud kia hai try 1
const userOnline = (users) => {
  let allUsersOnline = "";
  if (users.length === 1) {
    return `${users[0]} is online`;
  } else if (users.length === 2) {
    return `${users[0]} and ${users[1]} are online`;
  } else {
    for (let i = 0; i < users.length; i++) {
      if (i === users.length - 1) {
        allUsersOnline += `and ${users[i]}`;
      } else if (i === users.length - 2) {
        allUsersOnline += `${users[i]} `;
      } else {
        allUsersOnline += `${users[i]}, `;
      }
    }
  }
  return `${allUsersOnline} are online`;
};

console.log(userOnline(["Ali"]));
console.log(userOnline(["Ali", "Sara"]));
console.log(userOnline(["Ali", "Sara", "Raza"]));

// ye ap ne jo kaha wo kia try 2

function usersOnline(users) {
  // sirf template string use karni hai

  let names = "";

  if (users.length === 1) {
    names = users[0];
  } else if (users.length === 2) {
    names = users[0] + " and " + users[1];
  } else {
    names = users.slice(0, -1).join(", ") + " and " + users[users.length - 1];
  }

  let verb = users.length === 1 ? "is" : "are";

  return `${names} ${verb} online`;
}

console.log(usersOnline(["Ali"]));
console.log(usersOnline(["Ali", "Sara"]));
console.log(usersOnline(["Ali", "Sara", "Raza"]));
