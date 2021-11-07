const { Lecture, Profile } = require("../models");
const { Op } = require("sequelize");

exports.getLecByCrsId = async (courseId) => {
  const result = await Lecture.findOne({
    where: {
      courseId,
    },
  });
  return result;
};

exports.getLecsByProf = async (pk) => {
  const profile = await Profile.findOne({
    where: {
      pk,
    },
  });
  const result = profile.getLectures();
  return result;
};

exports.getLecsByCrsIdList = async (courseIdList) => {
  const result = await Lecture.findAll({
    where: {
      courseId: {
        [Op.or]: courseIdList,
      },
    },
  });
  return result;
};
