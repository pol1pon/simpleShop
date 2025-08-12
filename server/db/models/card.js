'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({Good, User}) {
      this.hasMany(Good, {foreignKey: 'goodId'})
      this.belongsTo(User, {foreignKey: 'card'})
    }
  }
  Card.init({
    goodId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};