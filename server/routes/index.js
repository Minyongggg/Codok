const router = require("express").Router();
const passport = require("passport");
const auth = require("./auth/index");
const user = require("./user/index");
const profile = require("./profile/index");
const lecture = require("./lecture/index");
const post = require("./post/index");
const take = require("./take/index");
const chatroom = require("./chatroom/index")
const chat = require("./chat/index");
const comment = require("./comment/index");

//로그인 검증할 때 사용?
const passportAuth = passport.authenticate("local", {});

router.use("/auth", auth);
router.use("/users", user);
router.use("/profiles", profile);
router.use("/lectures", lecture);
router.use("/posts", post);
router.use("/takes", take);
router.use("/chatrooms", chatroom);
router.use("/chats", chat);
router.use("/comments", comment)

// 로그인 여부 확인하는 미들웨어
// 근데 클라이언트에서 확인하는게 더 좋지 않을까?
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.json({ message: "로그인 안했음" });
  }
};

module.exports = router;
