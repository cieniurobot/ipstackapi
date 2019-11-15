'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('geolocation', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ip: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      continent_code: {
        type: Sequelize.STRING
      },
      continent_name: {
        type: Sequelize.STRING
      },
      country_code: {
        type: Sequelize.STRING
      },
      country_name: {
        type: Sequelize.STRING
      },
      region_code: {
        type: Sequelize.STRING
      },
      region_name: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.DECIMAL(10,8)
      },
      longtitude: {
        type: Sequelize.DECIMAL(10,8)
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
    return queryInterface.dropTable('geolocation');
  }
};
