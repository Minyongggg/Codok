const db = require('../models/index');
const User = db.User;

exports.signup = async ({ id, pwd }) => {
  const userFound = await User.findOne({ where: { id: id } });

  if (userFound) {
    console.log('User exist!');
    return false;
  } else {
    const user = User.create({
      id: id,
      password: pwd,
    });
    console.log('User created!');
    return user;
  }
};
exports.login = async () => {};
exports.logout = async () => {};
