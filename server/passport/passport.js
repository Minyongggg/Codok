const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models/index');
const User = db.User;

const loginConfig = {
  usernameField: 'id',
  passwordField: 'pwd',
  session: true,
  passReqToCallback: false,
};

const loginVerify = async (id, pwd, done) => {
  const user = await User.findOne({ where: { id: id } });

  if (!user) {
    return done(null, false, { message: '존재하지 않는 아이디입니다' });
  }
  if (pwd !== user.password) {
    return done(null, false, { message: '비밀번호가 잘못 되었습니다' });
  }
  return done(null, user);
};

passport.serializeUser((user, done) => {
  // user 정보로 서버에 세션을 만들고 쿠키를 클라이언트로 넘겨줌
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // 세션 id를 가진 req가 오면 req.user로 반환해줌
  done(null, user);
});

module.exports = () => {
  passport.use(
    new LocalStrategy(loginConfig, loginVerify) // LocalStrategy는 id와 pwd로 인증하는 전략
  );
};
