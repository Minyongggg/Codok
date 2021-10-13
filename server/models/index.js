const Sequelize = require("sequelize");

const config = require("../config/config").development;

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 모델정의
db.User = require("./user")(sequelize, Sequelize);
db.Profile = require("./profile")(sequelize, Sequelize);
db.Lecture = require("./lecture")(sequelize, Sequelize);
db.Post = require("./post")(sequelize, Sequelize);
db.Comment = require("./comment")(sequelize, Sequelize);
db.Take = require("./take")(sequelize, Sequelize);
// db.Chat = require('./chat')(sequelize, Sequelize);

// belongsTo는 source 모델이 foreign key를 가짐
// hasOne, hasMany는 target 모델이 foreign key를 가짐
// 양쪽에서 관계를 지정해주면 양쪽 모두에서 get 사용 가능

// user : profile = 1 : 1
// Profile은 userPk를 가짐
// Profile은 getUser 메소드 사용 가능
// User는 getProfile 메소드 사용 가능
db.User.hasOne(db.Profile, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

db.Profile.belongsTo(db.User, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

// user : post = 1 : N
// Post는 userPk를 가짐
// Post는 getUser 메소드 사용 가능
// User는 getPosts 메소드 사용 가능 (리스트), 반드시 plural
db.Post.belongsTo(db.Profile, {
  foreignKey: { name: "authorPk", allowNull: false },
  onDelete: "CASCADE",
});

db.Profile.hasMany(db.Post, {
  foreignKey: { name: "authorPk", allowNull: false },
  onDelete: "CASCADE",
});

// user : comment = 1 : N
db.Comment.belongsTo(db.Profile, {
  foreignKey: { name: "authorPk", allowNull: false },
  onDelete: "CASCADE",
});

db.Profile.hasMany(db.Comment, {
  foreignKey: { name: "authorPk", allowNull: false },
  onDelete: "CASCADE",
});

// post : comment = 1 : N
db.Post.hasMany(db.Comment, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

db.Comment.belongsTo(db.Post, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

// lecture : post = 1 : N
db.Lecture.hasMany(db.Post, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

db.Post.belongsTo(db.Lecture, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE",
});

// profile : lecture = N : M
// profile : take = 1 : N
// lecture : take = 1 : N
db.Profile.belongsToMany(db.Lecture, { through: "take" });
db.Lecture.belongsToMany(db.Profile, { through: "take" });

module.exports = db;
