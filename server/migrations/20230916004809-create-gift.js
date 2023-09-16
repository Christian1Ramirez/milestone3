'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Gifts', {
      gift_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      premium: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      retail: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      time: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      availability: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      location: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      user_id: {
        type: Sequelize.UUID,  
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Gifts');
  }
};