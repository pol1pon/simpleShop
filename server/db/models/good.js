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
    title: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    image: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    count: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Good',
  });
  return Good;
};