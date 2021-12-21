const router = require("express").Router();
const passport = require("passport");
const controller = require("./controller");

// const passportAuth = passport.authenticate('local', {});

router.post("/:profilePk", controller.createTakes);

module.exports = router;
