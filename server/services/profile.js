const { User, Lecture, Take, Profile } = require("../models");

exports.getProfs = async () => {
  const result = await Profile.findAll();
  return result;
};

exports.getProfByPk = async (pk) => {
  const result = await Profile.findOne({
    where: {
      pk,
    },
  });
  return result;
};

exports.getProfByUserPk = async (pk) => {
  const result = await Profile.findOne({
    where: {
      userPk: pk,
    },
  });
  return result;
};

exports.getProfsByLec = async (courseId) => {
  const lecture = await Lecture.findOne({
    where: {
      courseId,
    },
  });

  const result = lecture.getProfiles();

  return result;
};
