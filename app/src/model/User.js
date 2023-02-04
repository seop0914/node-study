const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const { id, password } = await UserStorage.getUserInfo(this.body);
    try {
      if (id) {
        if (password === this.body.password) {
          return { success: true };
        }
        return { success: false, msg: "비밀번호가 일치하지 않습니다." };
      }
      return { success: false, msg: "존재하지 않는 아이디 입니다." };
    } catch (err) {
      return { success: false };
    }
  }

  async register() {
    const result = await UserStorage.save(this.body);
    try {
      if (result.success) return { success: true };
      return { success: false };
    } catch (err) {
      return { success: false };
    }
  }
}

module.exports = User;
