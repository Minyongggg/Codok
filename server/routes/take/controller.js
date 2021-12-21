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


