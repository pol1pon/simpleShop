'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Good', [{
        title: 'Biba',
        description: '123',
        image: '124',
        price: 100,
        isBetaMember: false
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Good', null, {});
  }
};
