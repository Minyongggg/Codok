const router = require('express').Router();
const authServices = require('../../services/auth');

const passport = require('passport');
const passportAuth = passport.authenticate('local', {});

router.post('/signup', async (req, res, next) => {
  const newUser = await authServices.signup(req.body);

  if (newUser) {
    res.json({
      message: '유저 가입 성공!',
      data: `user: ${newUser.id}`,
    });
  } else {
    res.json({
      message: '해당 아이디가 이미 존재합니다.',
    });
  }
});

router.post('/login', passportAuth, async (req, res, next) => {
  res.json({
    message: `유저 로그인 성공!`,
    data: `user: ${req.user.id}`,
  });
  console.log(req.user);
});

router.get('/logout', async (req, res, next) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.json({
      message: `유저 로그아웃 성공!`,
    });
    console.log(req.user);
  });
});

module.exports = router;
