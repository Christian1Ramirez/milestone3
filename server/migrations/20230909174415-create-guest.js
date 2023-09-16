'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Guests', {
      guest_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      owner: {
        type: Sequelize.STRING
      },
      non_owner: {
        type: Sequelize.STRING
      },
      gift: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pay_per_tour: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      projected_pay: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      notes: {
        type: Sequelize.STRING
      },
      tour_date: {
        type: Sequelize.DATE,
        allowNull: false  
      },
      user_id: {
        type: Sequelize.UUID,  
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Guests');
  }
};
