module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      pk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    // option
    {
      tableName: "user",
      timestamps: false,
      underscored: false,
    }
  );
};
