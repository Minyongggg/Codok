module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "take",
    {
      pk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      profilePk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lecturePk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    // option
    {
      tableName: "take",
      timestamps: false,
      underscored: false,
    }
  );
};
