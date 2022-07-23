'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
        name: 'Alex',
        email: 'alpo@mail.com',
        password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Masha',
        email: 'masha@mail.com',
        password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
