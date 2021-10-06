const userServices = require("../../services/user");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await userServices.getUsers();

    res.json({
      message: "유저 목록 조회 성공",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

exports.getUserByPk = async (req, res, next) => {
  try {
    const user = await userServices.getUserByPk(req.params.pk);

    res.json({
      message: "유저 조회 성공!",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
