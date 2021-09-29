require('dotenv').config();
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const router = require('./routes/index');
const passportConfig = require('./passport/passport');
const { sequelize } = require('./models/index');

const app = express();

// sequelize.sync();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
passportConfig();

app.use(passport.session());
// app.use('/api', router);
app.use('/', router);

/// /////////////////////////////////////////////////////////////
app.listen(5000, () => {
  console.log(`Listening on 5000`);
});
