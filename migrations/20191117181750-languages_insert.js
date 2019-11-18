'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('g_location_language', [
      {
        code: "pl",
        name: 'Poland',
        native: "Polski",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        code: "en",
        name: 'English',
        native: "English",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        code: "de",
        name: 'German',
        native: "Deutsch",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('g_location_language', null, {});
  }
};
