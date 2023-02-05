const Board = require("../../model/Board");

const output = {
  list: async (req, res) => {
    const list = await Board.list();
    res.render("board/list", { list }, function (err, html) {
      if (err) {
        console.log(err);
      }
      res.end(html); // 응답 종료
    });
  },
  write: (req, res) => {
    res.render("board/write");
  },
  post: async (req, res) => {
    const board = new Board(req.query);
    const post = await board.post();
    res.render("board/post", { post }, (err, html) => {
      if (err) {
        console.log(err);
      }
      res.end(html); // 응답 종료
    });
  },
};

const process = {
  write: async (req, res) => {
    const board = new Board(req.body);
    const response = await board.write();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
