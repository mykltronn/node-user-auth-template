'use strict';

module.exports = {
  up : (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
      poNumber : 1006051609,
      type : 'order',
      orderDate : new Date(),
      quantity : 323,
      shipTo: 'Ortiz Ceramic',
      cast: 'in process',
      packaging: ['24', '1', 'n/a'],
      orderValue: 403750,
      proteusValue: 323000,
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down : (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Orders', [{
      poNumber : 1006051609
    }])
  }
};