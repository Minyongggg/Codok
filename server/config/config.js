const dotenv = require('dotenv');
dotenv.config();

const config = {
  port: 5000,
  db: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    pwd: process.env.MYSQL_PASSWORD,
    dbName: process.env.MYSQL_DBNAME,
  },
  cookieSecret: process.env.COOKIE_SECRET,
};

module.exports = config;
