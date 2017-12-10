'use strict';

module.exports = {
  up : (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username : 'admin',
      name : 'admin user',
      email : 'mykl.ashton@gmail.com',
      password : 'testing',
      type: 'admin',
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down : (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', [{
      first_name :'John'
    }])
  }
};