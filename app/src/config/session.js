const expressSession = require("express-session");
const MySQLStore = require("express-mysql-session")(expressSession);

const option = {
  host: "localhost",
  user: "node",
  password: "nodeStudy123!@",
  database: "node",
};

const sessionStore = new MySQLStore(option);

const session = expressSession({
  secret: "sessionSecret",
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
});

module.exports = session;
