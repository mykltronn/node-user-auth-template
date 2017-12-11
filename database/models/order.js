'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    poNumber: {
      type: DataTypes.INTEGER
    },
    otherIndentifier: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.ENUM('order', 'sample', 'color chip'),
      allowNull: false,
    },
    orderDate: {
      type: DataTypes.DATEONLY,
    },
    shippingDate: {
      type: DataTypes.DATEONLY
    },
    collectionId: {
      type: DataTypes.INTEGER,
    },
    designId: {
      type: DataTypes.INTEGER,
    },
    colorId: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shipTo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    showroom: {
      type: DataTypes.STRING,
    },
    associate: {
      type: DataTypes.STRING,
    },
    cast: {
      type: DataTypes.ENUM('yes', 'cancelled', 'in process'),
    },
    dateShipped: {
      type: DataTypes.DATEONLY
    },
    packaging: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    trackingNumber: {
      type: DataTypes.INTEGER
    },
    mixDesignId: {
      type: DataTypes.INTEGER,
    },
    orderValue: {
      type: DataTypes.INTEGER
    },
    proteusValue: {
      type: DataTypes.INTEGER
    },
    paidDate: {
      type: DataTypes.DATEONLY
    },
    checkTotal: {
      type: DataTypes.INTEGER
    },
    invoiceNumber: {
      type: DataTypes.INTEGER
    },
    zeroPercent: {
      type: DataTypes.INTEGER
    },
    proteusPercent: {
      type: DataTypes.INTEGER
    },
    invoiceDate: {
      type: DataTypes.DATEONLY
    },
    invoiceDoc: {
      type: DataTypes.STRING
    },
    invoicePaidDate: {
      type: DataTypes.DATEONLY
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: models => {
        // associations can be defined here
      }
    }
  });
  return Order;
};