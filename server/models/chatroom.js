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
      nickname1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nickname2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastChat: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      lastAt: {
        type: DataTypes.DATE,
        allowNull: true,
      }
    },
    // option
    {
      tableName: "chatroom",
      timestamps: false,
      underscored: false,
    }
  );
};
