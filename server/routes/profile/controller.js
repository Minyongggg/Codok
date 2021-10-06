const profileServices = require("../../services/profile");

exports.getProfs = async (req, res, next) => {
  try {
    const profiles = await profileServices.getProfs();

    res.json({
      message: "프로필 목록 조회 성공",
      data: profiles,
    });
  } catch (error) {
    next(error);
  }
};

exports.getProfByPk = async (req, res, next) => {
  try {
    const profile = await profileServices.getProfByPk(req.params.pk);

    res.json({
      message: "프로필 조회 성공!",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

exports.getProfByUserPk = async (req, res, next) => {
  try {
    const profiles = await profileServices.getProfByUserPk(req.params.pk);

    res.json({
      message: "유저의 프로필 조회",
      data: profiles,
    });
  } catch (error) {
    next(error);
  }
};

exports.getProfsByLec = async (req, res, next) => {
  try {
    const profiles = await profileServices.getProfsByLec(req.params.courseId);

    res.json({
      message: "해당 강의의 수강 프로필 조회",
      data: profiles,
    });
  } catch (error) {
    next(error);
  }
};
