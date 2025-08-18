'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Card', [{
       goodId: 3,
       isBetaMember: false
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Card', null, {});
  }
};
