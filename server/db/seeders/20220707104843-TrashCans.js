'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('TrashCans', [
      {
        trash_can_name: 'стекло',
        trash_can_info: 'Стекло может быть многократно переработано в новую стеклянную тару, стекловату или пеностекло. Переработка стекла позволяет не только сохранить первичное сырьё (песок, соду и известь), но и сократить расход энергии, предотвратить рост свалок и попадание острых осколков в окружающую среду.',
        trash_can_img_src: 'https://www.dor.expert/upload/iblock/987/9877244c10ddb37c5c8f97fdd05bfb9d.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_name: 'пластик',
        trash_can_info: 'Пластик – материал, получаемый из продуктов переработки нефти, угля и природного газа. Из переработанного пластика можно делать упаковку, ткани, дорожные покрытия, строительные материалы, игрушки, технику, мебель и многое, многое другое.',
        trash_can_img_src: 'https://www.dor.expert/upload/iblock/987/9877244c10ddb37c5c8f97fdd05bfb9d.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_name: 'металл',
        trash_can_info: 'Использование вторичного металла сокращает выбросы загрязняющих веществ и бережет полезные ископаемые – невозобновляемые природные ресурсы. Для производства металлических предметов из вторсырья требуется меньше энергии, чем для добычи и обработки руды.',
        trash_can_img_src: 'https://www.dor.expert/upload/iblock/987/9877244c10ddb37c5c8f97fdd05bfb9d.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_name: 'бумага',
        trash_can_info: 'Макулатура может быть переработана не только в новую бумагу, картон и упаковку, но и в строительные материалы. Использование вторичного бумажного сырья помогает сохранить леса, сократить выбросы парниковых газов и уменьшить расход воды: для получения бумаги из макулатуры нужно в два раза меньше воды, чем для бумаги из первичного сырья.',
        trash_can_img_src: 'https://www.dor.expert/upload/iblock/987/9877244c10ddb37c5c8f97fdd05bfb9d.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_name: 'органика',
        trash_can_info: 'Из органических отходов можно производить компост - дезинфицирующий продукт, который можно использовать в качестве компоста или даже в качестве энергии, не загрязняет окружающую среду и является частью естественного цикла',
        trash_can_img_src: 'https://www.dor.expert/upload/iblock/987/9877244c10ddb37c5c8f97fdd05bfb9d.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_name: 'смешанные отходы',
        trash_can_info: 'Смешанные отходы — это отходы, которые невозможно сдать на переработку и использовать повторно. Именно эти отходы идут на свалку. Во многих городах это, например, совсем изношенные одежда и обувь, отдельные виды пластика, средства гигиены.',
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
