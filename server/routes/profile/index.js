const router = require("express").Router();
const passport = require("passport");
const controller = require("./controller");

// const passportAuth = passport.authenticate('local', {});

router.get("/", controller.getProfs);
router.get("/:pk", controller.getProfByPk);
router.get("/users/:pk", controller.getProfByUserPk);
router.get("/lectures/:courseId", controller.getProfsByLec);
router.put("/:pk", controller.updateProf);

module.exports = router;
