const router = require('express').Router();
const { Op } = require('sequelize');
const { checkSession } = require('../middlewares/middleware');
const { Trash, TrashCan, Progress } = require('../db/models');

// checkSession -> НУЖНО ДОБАВИТЬ РОУТЕР НИЖЕ ПОСЛЕ '/',
router.get('/', async (req, res) => { // ! ДЕЛАТЬ ЗАПРОС НА ЭТУ РУЧКУ 1 РАЗ ПЕРЕД СТАРТОМ УРОВНЯ!!!
  try {
    const originPlayed = await Progress.findAll({
      // where: { user_id: { [Op.notIn]: [1, 3] } },
      where: { user_id: req.session.user.id },
      attributes: ['trash_id'],
    }); // отдельно id всех отгаданных мусоров
    console.log('ORIGIN', JSON.parse(JSON.stringify(originPlayed)));

    // const played = [];
    // for (const key in (JSON.parse(JSON.stringify(originPlayed)))) {
    //   played.push(+key);
    // }

    const played = [];
    for (let i = 0; i < (JSON.parse(JSON.stringify(originPlayed))).length; i += 1) {
      played.push(+originPlayed[i].trash_id);
    }

    console.log('PLAYEEED', played);
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
    res.json(data);
  } catch (err) {
    console.log('Не удалось загрузить игровые элементы', err);
  }
});

router.get('/time', async (req, res) => { // ! ДЕЛАТЬ ЗАПРОС НА ЭТУ РУЧКУ 1 РАЗ ПЕРЕД СТАРТОМ УРОВНЯ!!!
  try {
    const trashCans = await TrashCan.findAll({
      attributes: ['id', 'trash_can_name', 'trash_can_info', 'trash_can_img_src'],
    }); // отдельно мусорки все

    const trashes = await Trash.findAll({
      attributes: ['id', 'trash_can_id', 'trash_name', 'trash_img_src', 'info', 'score', 'bonus'],
      where: { id: { [Op.notIn]: [58, 59, 60] } },
    }); // отдельно мусор весь
    const data = {
      trashCans, // все мусорки из БД
      trashes, // мусор, который еще НЕ отгадали
      played: null, // id отгаданного мусора
    };
    res.json(data);
  } catch (err) {
    console.log('Не удалось загрузить игровые элементы', err);
  }
});

module.exports = router;
