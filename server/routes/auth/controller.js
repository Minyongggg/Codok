const authServices = require("../../services/auth");

exports.signup = async (req, res, next) => {
  const newUser = await authServices.signup(req.body);
  if (newUser) {
    next();
  } else {
    res.status(409).json({
      message: "id duplicate"
    });
  }
};

exports.login = async (req, res, next) => {
  const profile = await authServices.login(req.user.id);
  res.json({
    message: "유저 로그인 성공!",
    profile: profile,
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
