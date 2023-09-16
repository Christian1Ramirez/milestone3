'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Gifts', [
      {
        gift_id: 1,
        premium: 'Gift Card',
        price: '50',
        retail: '45',
        time: '10:00',
        availability: 'In Stock',
        location: 'mgm'
      },
      {
        gift_id: 2,
        premium: 'Coffee Mug',
        price: '10',
        retail: '45',
        time: '10:00',
        availability: 'Out of Stock',
        location: 'mgm'
      },
      {
        gift_id: 3,
        premium: 'Bluetooth Speaker',
        price: '30',
        retail: '45',
        time: '10:00',
        availability: 'In Stock',
        location: 'mgm'
      },
      {
        gift_id: 4,
        premium: 'Book',
        price: '15',
        retail: '65',
        time: '10:00',
        availability: 'In Stock',
        location: 'mgm'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Gifts', null, {});
  }
};