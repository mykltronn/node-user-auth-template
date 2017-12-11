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
      poNumber: {
        type: Sequelize.INTEGER
      },
      otherIndentifier: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM('order', 'sample', 'color chip'),
        allowNull: false,
      },
      orderDate: {
        type: Sequelize.DATEONLY,
      },
      shippingDate: {
        type: Sequelize.DATEONLY
      },
      collectionId: {
        type: Sequelize.INTEGER,
      },
      designId: {
        type: Sequelize.INTEGER,
      },
      colorId: {
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shipTo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      showroom: {
        type: Sequelize.STRING,
      },
      associate: {
        type: Sequelize.STRING,
      },
      cast: {
        type: Sequelize.ENUM('yes', 'cancelled', 'in process'),
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
      mixDesignId: {
        type: Sequelize.INTEGER,
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