module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "comment",
    {
      pk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // postPk: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
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
      tableName: "comment",
      timestamps: false,
      underscored: false,
    }
  );
};
