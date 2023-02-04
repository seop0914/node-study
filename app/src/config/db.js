const mysql = require("mysql");

const db = mysql.createConnection({
  host: "node-study.cgmtlxstc52g.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "admin123",
  database: "node_study",
});

db.connect();

module.exports = db;
