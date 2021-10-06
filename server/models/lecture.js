module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "lecture",
    {
      pk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      courseId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      professor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dayTime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    // option
    {
      tableName: "lecture",
      timestamps: false,
      underscored: false,
    }
  );
};
