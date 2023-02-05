const BoardStorage = require("./BoardStorage");

class Board {
  constructor(body) {
    this.body = body;
  }
  static async list() {
    const posts = await BoardStorage.getList();
    try {
      return posts;
    } catch (err) {
      return { success: false };
    }
  }
  async write() {
    const result = await BoardStorage.write(this.body);
    try {
      return result;
    } catch (err) {
      return { success: false };
    }
  }
  async post() {
    const post = await BoardStorage.getPost(this.body.id);
    try {
      return post;
    } catch (err) {
      return { success: false };
    }
  }
  async edit() {
    const result = await BoardStorage.setPost(this.body);
    try {
      return result;
    } catch (err) {
      return { success: false };
    }
  }
}

module.exports = Board;
