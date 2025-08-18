'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Goods', [{
        title: 'Biba',
        description: '123',
        image: '124',
        price: 100,
        count: '100'
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Goods', null, {});
  }
};
