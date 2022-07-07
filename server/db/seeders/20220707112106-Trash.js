'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Trashes', [
      {
        trash_can_id: 1,
        trash_name: 'стеклянная банка',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 1,
        trash_name: 'стеклянная бутылка',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 2,
        trash_name: 'одноразовая посуда',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 2,
        trash_name: 'бутылка от кока-колы',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 2,
        trash_name: 'полиэтиленовый пакет',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 3,
        trash_name: 'жестяная банка',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 3,
        trash_name: 'сломанный фен',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 4,
        trash_name: 'упаковка от яиц',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 4,
        trash_name: 'газета',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 5,
        trash_name: 'огрызок',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 5,
        trash_name: 'кожура овощей и фруктов',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 1,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'камни',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 2,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        trash_can_id: 6,
        trash_name: 'чек из магазина',
        trash_img_src: 'https://e7.pngegg.com/pngimages/963/1016/png-clipart-shrek-the-musical-donkey-princess-fiona-shrek-film-series-shrek-heroes-fictional-character.png',
        info: 'blablabla',
        score: 3,
        bonus: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Trashes', null, {});
  }
};
