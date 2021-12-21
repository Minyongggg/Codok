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

exports.getLecsByCrsIdList = async (req, res, next) => {
  try {
    const lectures = await lectureServices.getLecsByCrsIdList(
      req.body.courseIdList
    );

    res.json({
      message: "강의정보 리스트 조회 성공!",
      data: lectures,
    });
  } catch (error) {
    next(error);
  }
};
exports.getLecIdsBB = async (req, res, next) => {
  try {
    const courseList = await lectureServices.getLecIdsBB(
      req.body.id,
      req.body.password
    );

    res.json({
      message: "강의정보 리스트 조회 성공!",
      data: courseList,
    });
  } catch (error) {
    next(error);
  }
};


