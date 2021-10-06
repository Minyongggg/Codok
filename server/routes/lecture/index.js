const router = require("express").Router();
const passport = require("passport");
const controller = require("./controller");

router.get("/:courseId", controller.getLecByCrsId);
router.get("/profiles/:pk", controller.getLecsByProf);
module.exports = router;
