'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('geolocation_location_geolocation_location_language', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      geolocation_location_id: {
        type: Sequelize.INTEGER,
        references: { model: 'geolocation_location', key: 'id' }
      },
      geolocation_location_language_id: {
        type: Sequelize.INTEGER,
        references: { model: 'geolocation_location_language', key: 'id' }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('geolocation_location_geolocation_location_language');
  }
};
