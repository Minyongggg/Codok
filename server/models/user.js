module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'User',
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
      tableName: 'User',
      timestamps: false,
      underscored: false,
    }
  );
};
