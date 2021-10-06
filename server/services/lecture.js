const { Lecture, Profile } = require("../models");

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
