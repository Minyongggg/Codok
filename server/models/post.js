module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define(
    "post",
    {
      pk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // courseId: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // authorPk: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    // option
    {
      tableName: "post",
      timestamps: false,
      underscored: false,
    }
  );
  return post;
};
