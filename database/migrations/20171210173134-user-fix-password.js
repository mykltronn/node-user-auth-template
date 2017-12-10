'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'Users',
      'password',
      {
        type: Sequelize.STRING,
        allowNull: false,
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'Users',
      'password',
      {
        type: Sequelize.STRING,
      }
    )
  }
};
