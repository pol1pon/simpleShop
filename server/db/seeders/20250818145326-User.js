'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Users', [{
        email: '123@123',
        password: '123',
        card: 1,
      }], {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Users', null, {});

  }
};
