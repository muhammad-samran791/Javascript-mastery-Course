let usernameStore = "";
let passwordStore = "";

const signUp = (username, password) => {
  usernameStore = username;
  passwordStore = password;
};

const login = (username, password) => {
  if (username !== usernameStore) {
    console.log("User Not Found");
  } else {
    if (password !== passwordStore) {
      console.log("Wrong Password");
    } else {
      console.log("login Success");
    }
  }
};

signUp("muhammad_samran", "samran90588");

login("muhammad_samran", "samran90588");
