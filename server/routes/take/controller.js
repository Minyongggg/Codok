const takeServices = require("../../services/take");

exports.createTakes = async (req, res, next) => {
  try {
    const result = await takeServices.createTakes(req.params.profilePk, req.body);

    res.json({
      message: "블랙보드 연동 및 강의 등록 성공",
    });
    
  } catch (error) {
    next(error);
  }
};

exports.createByCourseId = async (req, res, next) => {
  try {
    const result = await takeServices.createByCourseId(req.params.profilePk, req.params.courseId);

    if(result){
      res.json({
        message: "강의 등록 성공",
      })
    }
    else{
      res.status(404).json({
        message: "notFound"
      })
    }
  } catch (error){
    next(error)
  }
}

exports.resetTakes = async (req, res, next) => {
  try {
    await takeServices.resetTakes(req.params.profilePk);

    res.json({
      message: "강의 등록 초기화"
    })

  } catch (error) {
    next(error);
  }
}