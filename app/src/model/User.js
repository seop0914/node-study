const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  login() {
    const { id, password } = UserStorage.getUsers(this.body.id);
    if (id) {
      if (id === this.body.id && password === this.body.password) {
        return { success: true };
      }
    }
    return { success: false };
  }
}

module.exports = User;
