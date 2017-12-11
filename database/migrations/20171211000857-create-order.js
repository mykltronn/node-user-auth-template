'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      po: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      orderDate: {
        type: Sequelize.DATEONLY
      },
      shippingDate: {
        type: Sequelize.DATEONLY
      },
      collection: {
        type: Sequelize.STRING
      },
      design: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      shipTo: {
        type: Sequelize.STRING
      },
      showroom: {
        type: Sequelize.STRING
      },
      associate: {
        type: Sequelize.STRING
      },
      cast: {
        type: Sequelize.BOOLEAN
      },
      dateShipped: {
        type: Sequelize.DATEONLY
      },
      packaging: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      trackingNumber: {
        type: Sequelize.INTEGER
      },
      mixDesign: {
        type: Sequelize.STRING
      },
      orderValue: {
        type: Sequelize.INTEGER
      },
      proteusValue: {
        type: Sequelize.INTEGER
      },
      paidDate: {
        type: Sequelize.DATEONLY
      },
      checkTotal: {
        type: Sequelize.INTEGER
      },
      invoiceNumber: {
        type: Sequelize.INTEGER
      },
      zeroPercent: {
        type: Sequelize.INTEGER
      },
      proteusPercent: {
        type: Sequelize.INTEGER
      },
      invoiceDate: {
        type: Sequelize.DATEONLY
      },
      invoiceDoc: {
        type: Sequelize.STRING
      },
      invoicePaidDate: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Orders');
  }
};