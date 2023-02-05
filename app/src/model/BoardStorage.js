const db = require("../config/db");

class BoardStorage {
  static getList() {
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
  static getPost(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM board WHERE id = ?";
      db.query(query, [id], (err, data) => {
        if (err) reject(err);
        resolve(data[0]);
      });
    });
  }
  static setPost(boardInfo) {
    console.log(boardInfo)
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE board SET title = ?, content = ?, update_date = CURRENT_TIMESTAMP WHERE id = ?";
      db.query(
        query,
        [boardInfo.title, boardInfo.content, boardInfo.id],
        (err, data) => {
          if (err) reject(err);
          else resolve({ success: true });
        });
    });
  }
}

module.exports = BoardStorage;
