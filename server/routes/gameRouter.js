const router = require('express').Router();
const { Op } = require('sequelize');
const { checkSession } = require('../middlewares/middleware');
const { Trash, TrashCan, Progress } = require('../db/models');

router.get('/', checkSession, async (req, res) => { // ! ДЕЛАТЬ ЗАПРОС НА ЭТУ РУЧКУ 1 РАЗ ПЕРЕД СТАРТОМ УРОВНЯ!!!
  try {
    const originPlayed = await Progress.findAll({
      // where: { user_id: { [Op.notIn]: [1, 3] } },
      where: { user_id: req.session.user.id },
      attributes: ['id'],
    }); // отдельно id всех отгаданных мусоров

    const played = [];
    for (const key in (JSON.parse(JSON.stringify(originPlayed)))) {
      played.push(+key);
    };

    const trashCans = await TrashCan.findAll({
      attributes: ['id', 'trash_can_name', 'trash_can_info', 'trash_can_img_src'],
    }); // отдельно мусорки все

    const trashes = await Trash.findAll({
      attributes: ['id', 'trash_can_id', 'trash_name', 'trash_img_src', 'info', 'score', 'bonus'],
      where: { id: { [Op.notIn]: played } },
    }); // отдельно мусор весь
    const data = {
      trashCans, // все мусорки из БД
      trashes, // мусор, который еще НЕ отгадали
      played, // id отгаданного мусора
    };
    // res.send(data);
    res.json(data);
  } catch (err) {
    console.log('Не удалось загрузить игровые элементы', err);
  }
});

module.exports = router;
