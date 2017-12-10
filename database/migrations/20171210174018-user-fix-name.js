'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'Users',
      'name',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'Users',
      'name',
      {
        type: Sequelize.STRING,
      }
    )
  }
};
