const router = require('express').Router();
const Sequelize = require('sequelize');
const { User, Progress, Trash } = require('../db/models');
const { checkSession } = require('../middlewares/middleware');

router.get('/', checkSession, async (req, res) => {
  try {
    const progress = await User.findOne({
      where: { id: req.session.user.id },
      include: [{ model: Progress, attributes: [] }],
      attributes:
        ['id', 'name', [Sequelize.fn('SUM', Sequelize.col('Progresses.score')), 'score']],
      group: ['User.id'],
    });
    res.json(progress);
  } catch (err) {
    console.log('Не удалось загрузить прогресс', err);
  }
}); // выводит количество баллов у юзера в сессии

router.get('/homeless', checkSession, async (req, res) => {
  try {
    const originBonuses = await Progress.findAll({
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
  console.log(req.body);
  const { trash_id, score } = req.body;
  try {
    // if (trash_id === id) {
    await Progress.create({
      user_id: req.session.user.id,
      trash_id,
      score,
    });
    // }
    res.sendStatus(200);
  } catch (err) {
    console.log('Не удалось добавить ответ в прогресс', err);
  }
}); // записывает в БД правильные ответы (id - это из таблицы TrashCan)

router.delete('/:id', checkSession, async (req, res) => {
  const { id } = req.params;

  await Progress.destroy({ where: { user_id: id } });
  res.sendStatus(200);
}); // удаление из прогресса в БД для начала новой игры

module.exports = router;
