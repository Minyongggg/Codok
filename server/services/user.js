const { User, Lecture, Take, Profile, Post } = require("../models");

exports.getUsers = async () => {
  const result = await User.findAll();
  return result;
};

exports.getUserByPk = async (pk) => {
  const result = await User.findOne({
    where: {
      pk,
    },
  });
  return result;
};
