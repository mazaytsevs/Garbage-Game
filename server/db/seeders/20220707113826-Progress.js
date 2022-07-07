'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Progresses', [
      {
        user_id: 1,
        trash_id: 1,
        score: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        trash_id: 2,
        score: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        trash_id: 3,
        score: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        trash_id: 1,
        score: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        trash_id: 4,
        score: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        trash_id: 5,
        score: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Progresses', null, {});
  }
};
