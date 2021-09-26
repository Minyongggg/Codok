require('dotenv').config();

const express = require('express');

const app = express();
const port = '5000';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cors = require('cors');
const mysql = require('mysql');

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.use(cors({ origin: true, credentials: true }));
app.use((req, res, next) => {
  res.header('Content-Type', 'application/json;charset=UTF-8');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

/// /passport & authentication setting////////////////////////////////
passport.use(
  new LocalStrategy( // LocalStrategy는 id와 pwd로 인증하는 전략
    {
      usernameField: 'id',
      passwordField: 'pwd',
      session: true,
      passReqToCallback: false,
    },
    function (id, pwd, done) {
      const sql = 'SELECT * FROM user WHERE id=?';
      con.query(sql, [id], (err, rows) => {
        if (err) throw err;
        if (rows.length === 0) {
          return done(null, false, { message: '존재하지 않는 아이디입니다' });
        }
        if (pwd !== rows[0].password) {
          return done(null, false, { message: '비밀번호가 잘못 되었습니다' });
        }
        const user = JSON.parse(JSON.stringify(rows[0]));
        console.log(`User Found! : ${user.id}, ${user.password}`);
        return done(null, user);
      });
    }
  )
);

passport.serializeUser((user, done) => {
  // user.id 정보로 서버에 세션을 만들고 쿠키를 클라이언트로 넘겨줌
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // session id를 가진 req가 오면 역으로 user를 탐색하여 req.user로 반환해줌
  const sql = 'SELECT * FROM user WHERE id=?';
  con.query(sql, [id], (err, rows) => {
    if (err) throw err;
    console.log(`${rows[0]} deserialized`);
    done(null, rows[0]);
  });
});

function isLoggedIn(req, res, next) {
  // API 요청 시 로그인 여부 확인
  if (req.user) {
    next();
  } else {
    console.log(req.user);
    res.send('Not Logged In');
  }
}
/// /////////////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

/// ////////////////////////
/// ///Main API
/// /////////////////////////

app.post('/user/login', passport.authenticate('local', {}), (req, res) => {
  console.log(req.session);
  console.log(req.user.id);
  res.status(200).send(req.user.id);
});

app.get('/user/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.send('logout');
  });
});

app.get('/user/mypage', isLoggedIn, (req, res) => {
  console.log(req.user);
  res.send(`mypage info User: ${req.user.id}`);
});
