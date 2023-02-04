const db = require("../config/db");

class BoardStorage {
  static getPosts() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM board";
      db.query(query, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
  static writePost() {}
}

module.exports = BoardStorage;
