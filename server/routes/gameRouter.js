const router = require('express').Router();
const { checkSession } = require('../middlewares/middleware');
const { Trash, TrashCan } = require('../db/models');


router.get('/', checkSession, async (req, res) => {
  try {
    const trashCans = await TrashCan.findAll({
      attributes: ['id', 'trash_can_name', 'trash_can_img_src'],
      raw: true,
    }); // отдельно мусорки все
    const trashes = await Trash.findAll({
      attributes: ['id', 'trash_can_id', 'trash_name', 'trash_img_src', 'info', 'score', 'bonus'],
      raw: true,
    }); // отдельно мусор весь
    const played = 
  } catch (err) {
    console.log('Не удалось загрузить игровые элементы', err);
  }
})

module.exports = router;
