'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: "Kempagowda International Airport",
        address: "Bengaluru, Karnataka 560300",
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mysore Airport',
        address: 'Mysore, Karnataka 570008',
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mangalore International Airport",
        address: "Kenjar, Bajpe, Karnataka 574142",
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        address: "Mumbai, Maharashtra 400099",
        cityId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Indira Gandhi International Airport",
        address: "New Delhi, Delhi 110037",
        cityId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chennai International Airport",
        address: "Chennai, Tamil Nadu 600027",
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
