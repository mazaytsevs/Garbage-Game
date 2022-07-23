const router = require('express').Router();
const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const { User, Trash, TimeProgress } = require('../db/models');
const { checkSession } = require('../middlewares/middleware');

router.get('/', checkSession, async (req, res) => {
  try {
    const progress = await User.findOne({
      where: { id: req.session.user.id },
      include: [{ model: TimeProgress, attributes: [] }],
      attributes:
        ['id', 'name', [Sequelize.fn('SUM', Sequelize.col('TimeProgresses.score')), 'score']],
      group: ['User.id'],
    });
    res.json(progress);
  } catch (err) {
    console.log('Не удалось загрузить прогресс', err);
  }
}); // выводит количество баллов у юзера в сессии

router.get('/homeless', checkSession, async (req, res) => {
  try {
    const originBonuses = await TimeProgress.findAll({
      where: { user_id: req.session.user.id },
      include: [{
        model: Trash,
        where: { bonus: true },
        attributes: ['trash_name', 'id'],
      }],
      attributes: [],
    });
    const bonuses = ['man-look'];
    for (let i = 0; i < originBonuses.length; i += 1) {
      bonuses.push(originBonuses[i].Trash.id);
    }
    bonuses.sort((a, b) => a - b);
    res.json(bonuses);
  } catch (err) {
    console.log('Не удалось загрузить бонусы пользователя', err);
  }
});

router.post('/answer', checkSession, async (req, res) => {
  const { trash_id, score } = req.body;
  try {
    await TimeProgress.create({
      user_id: req.session.user.id,
      trash_id,
      score,
    });
    res.sendStatus(200);
  } catch (err) {
    console.log('Не удалось добавить ответ в прогресс', err);
  }
}); // записывает в БД правильные ответы (id - это из таблицы TrashCan)

router.delete('/:id', checkSession, async (req, res) => {
  const { id } = req.params;

  await TimeProgress.destroy({ where: { user_id: id } });
  res.sendStatus(200);
}); // удаление из прогресса в БД для начала новой игры

router.get('/table', checkSession, async (req, res) => {
  try {
    const progress = await User.findAll({
      include: [{ model: TimeProgress, where: { score: { [Op.not]: null } }, attributes: [] }],
      attributes:
        ['id', 'name', [Sequelize.fn('SUM', Sequelize.col('TimeProgresses.score')), 'score']],
      group: ['User.id'],
      // order: [Sequelize.fn('max', Sequelize.col('User.score'))],
    });
    // progress.score.sort((a, b) => a - b);
    console.log('aaaaaaaaaaaaaaaaa', progress);
    res.json(progress);
  } catch (err) {
    console.log('Не удалось загрузить прогресс', err);
  }
});

module.exports = router;
