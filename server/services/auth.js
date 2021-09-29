const db = require('../models/index');

const { User } = db;

exports.signup = async ({ id, pwd }) => {
  const userFound = await User.findOne({ where: { id } });

  if (userFound) {
    console.log('User exist!');
    return false;
  }
  const user = User.create({
    id,
    password: pwd,
  });
  console.log('User created!');
  return user;
};
exports.login = async () => {};
exports.logout = async () => {};
