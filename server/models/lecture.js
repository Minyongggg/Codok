module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'Lecture',
    {
      pk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
      },
      section: {
        type: DataTypes.INTEGER,
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
      tableName: 'Lecture',
      timestamps: false,
      underscored: false,
    }
  );
};
