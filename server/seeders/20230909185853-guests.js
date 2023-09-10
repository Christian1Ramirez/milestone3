'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Guests', [
     {
      name: 'Luisa Ramirez',
      owner: 'Y',
      non_owner: 'N',
      gift: 'JABBAWOCKEEZ',
      pp: 100,
      notes: 'Awesome guest but he might not show due to being here for a bacholar party',
      tour_date: "09-01-2023"
     },
     {
      name: 'Christian Ramirez',
      owner: 'N',
      non_owner: 'Y',
      gift: 'BEATLES LOVE',
      pp: 10,
      notes: 'He smelled like he was homeless and dressed accordingly, not really sure how he manages to function as he also seemed a bit slow but damn if his credit isnt good',
      tour_date: "09-02-2023"
     },
     {
      name: 'Juaquin Ramirez',
      owner: 'Y',
      non_owner: 'N',
      gift: 'CARROT TOP',
      pp: 50,
      notes: 'Stand up guy and has a stand up father',
      tour_date: "09-03-2023"
     },
     {
      name: 'Alexi Ramirez',
      owner: 'Y',
      non_owner: 'N',
      gift: 'BLUE MAN GROUP',
      pp: 75,
      notes: 'Stand up guy and has a stand up father',
      tour_date: "09-04-2023"
     }
    ])
 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Guests', null, {})
  }
};
