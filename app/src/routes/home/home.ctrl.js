const User = require("../../model/User");
const Board = require("../../model/Board");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
  list: async (req, res) => {
    const list = await Board.list();
    res.render("home/boardList", { list: list }, function (err, html) {
      if (err) {
        console.log(err);
      }
      res.end(html); // 응답 종료
    });
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
