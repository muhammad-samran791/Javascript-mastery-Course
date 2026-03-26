// const createUser = (name) => {
//   return function getUser() {
//     console.log(name);
//   };
// };

function createUser(name) {
  return {
    getUser: function () {
      console.log(name);
    },
    changeUser: function (changeName) {
      name = changeName;
    },
  };
}

const user = createUser("Samran");
user.getUser();
user.changeUser("Kamran");
user.getUser();
