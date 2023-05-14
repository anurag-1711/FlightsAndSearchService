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
        address: "Kempegowda International Airport, Devanahalli, Bengaluru, Karnataka 560300",
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mysore Airport',
        address: 'Mysore Airport, Mysore, Karnataka 570008',
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mangalore International Airport",
        address: "Mangalore International Airport, Kenjar, Bajpe, Karnataka 574142",
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        address: "Chhatrapati Shivaji Maharaj International Airport, Mumbai, Maharashtra 400099",
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Indira Gandhi International Airport",
        address: "Indira Gandhi International Airport, New Delhi, Delhi 110037",
        cityId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chennai International Airport",
        address: "Chennai International Airport, GST Rd, Meenambakkam, Chennai, Tamil Nadu 600027",
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
