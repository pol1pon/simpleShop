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
    email: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    card: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};