module.exports = (sequelize, DataTypes) => {
  const User =  sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    username: {
      type: DataTypes.STRING,
    },
    serviceProvider: DataTypes.STRING,
    picture: {
      type: DataTypes.STRING,
      unique: true
    },
    email: { 
      type:DataTypes.STRING,
      unique: true
    }
  });
  return User;
};