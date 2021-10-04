module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'Profile',
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
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      major: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      studentId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      introduce: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      mateWant: {
        type: DataTypes.BOOLEAN,
      },
      profileImg: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    // option
    {
      tableName: 'Profile',
      timestamps: false,
      underscored: false,
    }
  );
};
