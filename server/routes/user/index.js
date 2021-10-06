const router = require("express").Router();
const passport = require("passport");
const controller = require("./controller");

// const passportAuth = passport.authenticate('local', {});

router.get("/", controller.getUsers);
router.get("/:pk", controller.getUserByPk);

module.exports = router;
