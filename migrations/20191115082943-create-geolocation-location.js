'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('geolocation_location', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      geoname_id: {
        type: Sequelize.INTEGER
      },
      capital: {
        type: Sequelize.STRING
      },
      country_flag: {
        type: Sequelize.STRING
      },
      country_flag_emoji: {
        type: Sequelize.STRING
      },
      country_flag_emoji_unicode: {
        type: Sequelize.STRING
      },
      calling_code: {
        type: Sequelize.STRING
      },
      is_eu: {
        type: Sequelize.BOOLEAN
      },
      geolocationId: {
        type: Sequelize.INTEGER,
        references: { model: 'geolocation', key: 'id' }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('geolocation_location');
  }
};
