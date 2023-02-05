const express = require("express");
const router = express.Router();
const ctrl = require("./board.ctrl");

router.get("/list", ctrl.output.list);
router.get("/write", ctrl.output.write);

router.post("/write", ctrl.process.write);

module.exports = router;
