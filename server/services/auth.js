const db = require("../models/index");

const { User, Profile } = db;

exports.signup = async ({ id, pwd }) => {
  const userFound = await User.findOne({ where: { id } });

  if (userFound) {
    console.log("User exist!");
    return false;
  }

  const user = await User.create({
    id,
    password: pwd,
  });

  const profile = await Profile.create({
    nickname: `임시닉네임${user.pk}`,
    userPk: user.pk,
    gender: "default",
    major: "default",
    studentId: "default",
    introduce: "default",
    mateWant: 0,
    profileImg: "default",
  });
  console.log("User created!");
  console.log("Profile created!");
  return user;
};

exports.login = async (id) => {
  const user = await User.findOne({ where: { id } });


  const profile = user.getProfile();

  if(profile){
    return profile;
  }
  console.log("Profile not Found!");
  return false

};

exports.logout = async () => {};
