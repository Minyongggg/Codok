module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'Post',
    {
      pk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // lecturePk: {
      //   type: DataTypes.INTEGER,
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
      tableName: 'Post',
      timestamps: false,
      underscored: false,
    }
  );
};
