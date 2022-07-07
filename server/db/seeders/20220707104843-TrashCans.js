'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('TrashCans', [
      {
        trash_can_name: 'стекло',
        trash_can_img_src: 'https://www.dor.expert/upload/iblock/987/9877244c10ddb37c5c8f97fdd05bfb9d.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_name: 'пластик',
        trash_can_img_src: 'https://www.dor.expert/upload/iblock/987/9877244c10ddb37c5c8f97fdd05bfb9d.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_name: 'металл',
        trash_can_img_src: 'https://www.dor.expert/upload/iblock/987/9877244c10ddb37c5c8f97fdd05bfb9d.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_name: 'бумага',
        trash_can_img_src: 'https://www.dor.expert/upload/iblock/987/9877244c10ddb37c5c8f97fdd05bfb9d.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_name: 'органика',
        trash_can_img_src: 'https://www.dor.expert/upload/iblock/987/9877244c10ddb37c5c8f97fdd05bfb9d.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_name: 'смешанные отходы',
        trash_can_img_src: 'https://www.dor.expert/upload/iblock/987/9877244c10ddb37c5c8f97fdd05bfb9d.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('TrashCans', null, {});
  }
};
