const expressSession = require("express-session");
const MySQLStore = require("express-mysql-session")(expressSession);

const option = {
  host: "node-study.cgmtlxstc52g.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "admin123",
  database: "node_study",
};

const sessionStore = new MySQLStore(option);

const session = expressSession({
  secret: "abcd1234",
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
});

module.exports = session;
