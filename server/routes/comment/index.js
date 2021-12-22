const router = require("express").Router();
const passport = require("passport");
const controller = require("./controller");

const passportAuth = passport.authenticate("local", {});

router.get("/:pk", controller.getCommentByPk);
router.get("/profiles/:pk", controller.getCommentsByProf);
router.get("/posts/:pk", controller.getCommentsByPost);
router.post("/", controller.newComment);
router.put("/:pk", controller.updateComment);
router.delete("/:pk", controller.delComment);

module.exports = router;
