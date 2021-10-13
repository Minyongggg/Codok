const router = require("express").Router();
const passport = require("passport");
const controller = require("./controller");

const passportAuth = passport.authenticate("local", {});

router.get("/:pk", controller.getPostByPk);
router.get("/profiles/:pk", controller.getPostsByProf);
router.get("/lectures/:courseId", controller.getPostsByLec);
router.post("/", controller.newPost);
router.put("/:pk", controller.updatePost);
router.delete("/:pk", controller.delPost);

module.exports = router;
