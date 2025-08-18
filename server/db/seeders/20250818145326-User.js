'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('User', [{
        email: '123@123',
        password: '123',
        card: 3,
        isBetaMember: false
      }], {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('User', null, {});

  }
};
