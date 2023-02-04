const BoardStorage = require("./BoardStorage");

class Board {
  constructor(body) {
    this.body = body;
  }
  static async list() {
    const posts = await BoardStorage.getPosts();
    try {
      return posts;
    } catch (err) {
      return { success: false };
    }
  }
}

module.exports = Board;