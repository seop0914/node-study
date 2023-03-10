const db = require("../config/db");

class UserStorage {
  static getUserInfo(body) {
    return new Promise((resolve, reject) => {
      const query = "SELECT id, name, password FROM users WHERE id = ?";
      db.query(query, [body], (err, data) => {
        if (err) reject(`${err}`);
        if (data.length !== 0) resolve(data[0]);
        else resolve({ id: false });
      });
    });
  }
  static save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?)";
      db.query(
        query,
        [userInfo.id, userInfo.name, userInfo.password],
        (err) => {
          if (err) reject(`${err}`);
          resolve({ success: true });
        }
      );
    });
  }
  static update(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE users SET name = ?, password = ? WHERE id = ?";
      db.query(
        query,
        [userInfo.name, userInfo.password, userInfo.id],
        (err) => {
          if (err) reject(`${err}`);
          resolve({ success: true });
        }
      );
    });
  }
}

module.exports = UserStorage;
