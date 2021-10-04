const Sequelize = require('sequelize');

const config = require('../config/config').development;

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 모델정의
db.User = require('./user')(sequelize, Sequelize);
db.Profile = require('./profile')(sequelize, Sequelize);
db.Lecture = require('./lecture')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
// db.Chat = require('./chat')(sequelize, Sequelize); 나중에 추가

// belongsTo는 source 모델이 foreign key를 가짐
// Player.belongsTo(Team) Player는 teamPk로 team의 pk를 가진다

// hasOne, hasMany는 target 모델이 foreign key를 가짐
// Player.hasOne(Team) Team은 playerPk로 player의 pk를 가진다

// 관계정의 user : profile = 1 : 1
db.User.hasOne(db.Profile, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE',
});
db.Profile.belongsTo(db.User, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE',
});

// user : post = 1 : N
db.User.hasMany(db.Post, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE',
});

// user : comment = 1 : N
db.User.hasMany(db.Comment, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE',
});

// lecture : post = 1 : N
db.User.hasMany(db.Post, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE',
});

// post : comment = 1 : N
db.Post.hasMany(db.Comment, {
  foreignKey: { allowNull: false },
  onDelete: 'CASCADE',
});

// profile : lecture = N : M
db.Profile.belongsToMany(db.Lecture, { through: 'Take' });
db.Lecture.belongsToMany(db.Profile, { through: 'Take' });

module.exports = db;
