const lectureServices = require("../../services/lecture");

exports.getLecByCrsId = async (req, res, next) => {
  try {
    const lecture = await lectureServices.getLecByCrsId(req.params.courseId);

    res.json({
      message: "강의정보 조회 성공!",
      data: lecture,
    });
  } catch (error) {
    next(error);
  }
};

exports.getLecsByProf = async (req, res, next) => {
  try {
    const lecture = await lectureServices.getLecsByProf(req.params.pk);

    res.json({
      message: "강의정보 조회 성공!",
      data: lecture,
    });
  } catch (error) {
    next(error);
  }
};
