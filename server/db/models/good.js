'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Good extends Model {
    static associate({Card}) {
      this.belongsTo(Card, {foreignKey: 'goodId'})
    }
  }
  Good.init({
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Good',
  });
  return Good;
};