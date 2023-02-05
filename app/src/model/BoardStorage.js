const db = require("../config/db");

class BoardStorage {
  static getPosts() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM board ORDER BY id DESC";
      db.query(query, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
  static write(boardInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO board(title, writer, content) VALUES(?, ?, ?)";
      db.query(
        query,
        [boardInfo.title, boardInfo.writer, boardInfo.content],
        (err, data) => {
          if (err) reject(err);
          else resolve({ success: true });
        }
      );
    });
  }
}

module.exports = BoardStorage;
