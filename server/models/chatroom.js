module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "chatroom",
    {
      pk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      profile1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      profile2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    // option
    {
      tableName: "chatroom",
      timestamps: false,
      underscored: false,
    }
  );
};
