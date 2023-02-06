const User = require("../../model/User");
const Board = require("../../model/Board");

const output = {
  home: (req, res) => {
    res.render("home/index", { session: req.session }, function (err, html) {
      if (err) {
        console.log(err);
      }
      res.end(html); // 응답 종료
    });
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
  myPage: async (req, res) => {
    const user = new User(req.session.sessionID);
    const info = await user.getUserInfo();
    res.render("home/myPage", { info });
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    if (response.success) {
      req.session.name = response.name;
      req.session.sessionID = response.id;
      req.session.login = true;
    }
    return res.json(response);
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/login");
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
  update: async (req, res) => {
    const user = new User(req.body);
    const response = await user.update();
    if (response.success) {
      req.session.name = response.name;
    }
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
