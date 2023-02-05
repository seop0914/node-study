const express = require("express");
const router = express.Router();
const ctrl = require("./board.ctrl");

router.get("/list", ctrl.output.list);
router.get("/write", ctrl.output.write);
router.get("/post", ctrl.output.post);
router.get("/edit", ctrl.output.edit);

router.post("/write", ctrl.process.write);
router.post("/edit", ctrl.process.edit);

module.exports = router;
