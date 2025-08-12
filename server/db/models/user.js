'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Card}) {
      this.hasOne(Card, {foreignKey: 'card'})
    }
  }
  User.init({
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    card: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};