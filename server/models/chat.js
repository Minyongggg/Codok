module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "chat",
    {
      pk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      senderPk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      receiverPk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
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
      tableName: "chat",
      timestamps: false,
      underscored: false,
    }
  );
};
