'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('g_location_gl_language', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gl_id: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        references: { model: 'g_location', key: 'id'}
      },
      gll_id: {
        type: Sequelize.INTEGER,
        references: { model: 'g_location_language', key: 'id' }
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
    return queryInterface.dropTable('g_location_gl_language');
  }
};
