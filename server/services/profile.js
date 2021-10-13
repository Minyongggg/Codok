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

exports.updateProf = async (
  pk,
  { nickname, gender, major, studentId, introduce, mateWant, profileImg }
) => {
  const profile = await Profile.findOne({
    where: {
      pk,
    },
  });
  profile.nickname = nickname;
  profile.gender = gender;
  profile.major = major;
  profile.studentId = studentId;
  profile.introduce = introduce;
  profile.mateWant = mateWant;
  profile.profileImg = profileImg;

  await profile.save();
  return profile;
};
