const Sequelize = require('sequelize');

const config = require('../config/config').development;

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 모델정의
db.User = require('./user')(sequelize, Sequelize);
db.Profile = require('./profile')(sequelize, Sequelize);
db.Take = require('./take')(sequelize, Sequelize);

module.exports = db;
