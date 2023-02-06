const User = require("../../model/User");
const Board = require("../../model/Board");

const output = {
  home: (req, res) => {
    const session = req.session;
    if (session.name) {
      res.render("home/index", { session }, function (err, html) {
        if (err) {
          console.log(err);
        }
        res.end(html); // 응답 종료
      });
    } else {
      res.render("error/error");
    }
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    if (response.success) {
      req.session.name = response.name;
      req.session.sessionID = response.id;
    }
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
