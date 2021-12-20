const authServices = require("../../services/auth");

exports.signup = async (req, res, next) => {
  const newUser = await authServices.signup(req.body);
  if (newUser) {
    next();
  } else {
    res.json({
      message: "가입 안됐엉",
    });
  }
};

exports.login = async (req, res, next) => {
  res.json({
    message: "유저 로그인 성공!",
    data: {
      user: req.user.id,
    }
  });
};

exports.logout = async (req, res, next) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({
      message: `유저 로그아웃 성공!`,
    });
  });
};
