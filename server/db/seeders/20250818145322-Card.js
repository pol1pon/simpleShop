'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Cards', [{
       goodId: 1,
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Cards', null, {});
  }
};
