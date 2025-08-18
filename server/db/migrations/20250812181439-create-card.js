'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      goodId: {
        references:{
          key: 'id',
          model: 'Goods'
        },
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      onDelete: 'cascade',
      type: Sequelize.INTEGER,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cards');
  }
};