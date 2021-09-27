require('dotenv').config();
const config = require('./config/config');
const express = require('express');
const path = require('path');
const passport = require('passport');
const cors = require('cors');
const apiRouter = require('./routes/index');
const passportConfig = require('./passport/passport');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

app.use(
  session({
    secret: config.cookieSecret,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passportConfig();

/// /////////////////////////////////////////////////////////////
app.listen(config.port, () => {
  console.log(`Listening on ${port}`);
});

app.use('/api', apiRouter);
