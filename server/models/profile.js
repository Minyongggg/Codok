module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "profile",
    {
      pk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // userPk: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   unique: true,
      // },
      nickname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      major: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      studentId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      introduce: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      mateWant: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      profileImg: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    // option
    {
      tableName: "profile",
      timestamps: false,
      underscored: false,
    }
  );
};
