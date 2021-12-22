const router = require("express").Router();
const passport = require("passport");
const controller = require("./controller");

// const passportAuth = passport.authenticate('local', {});

router.post("/:profilePk", controller.createTakes);
router.post("/:profilePk/:courseId", controller.createByCourseId);
router.delete("/:profilePk", controller.resetTakes);

module.exports = router;
