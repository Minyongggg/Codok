const router = require("express").Router();
const passport = require("passport");
const controller = require("./controller");

router.post("/", controller.sendChat);
router.get("/:chatroomPk", controller.getChats);
module.exports = router;
