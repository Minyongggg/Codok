const router = require("express").Router();
const passport = require("passport");
const controller = require("./controller");

router.post("/", controller.getChatroom);
router.get("/:profilePk", controller.findChatrooms);
module.exports = router;
