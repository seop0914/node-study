const express = require("express");
const router = express.Router();
const ctrl = require("./board.ctrl");

router.get("/list", ctrl.output.list);
router.get("/write", ctrl.output.write);
router.get("/post", ctrl.output.post);

router.post("/write", ctrl.process.write);

module.exports = router;
