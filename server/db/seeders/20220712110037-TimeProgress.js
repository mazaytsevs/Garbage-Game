'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('TimeProgresses', [
      {
        user_id: 1,
        trash_id: 57,
        score: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        trash_id: 55,
        score: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        trash_id: 54,
        score: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('TimeProgresses', null, {});
  }
};
