const router = require('express').Router();
const Sequelize = require('sequelize');
const { User, Progress } = require('../db/models');
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
    // res.send(progress);
    res.json(progress);
  } catch (err) {
    console.log('Не удалось загрузить прогресс', err);
  }
}); // выводит количество баллов у юзера в сессии

router.post('/answer', checkSession, async (req, res) => {
  const { trash_id, id, score } = req.body;
  try {
    if (trash_can_id === id) {
      await Progress.create({
        user_id: req.session.user.id,
        trash_id,
        score,
      });
    }
    res.sendStatus(200);
  } catch (err) {
    console.log('Не удалось добавить ответ в прогресс', err);
  }
}); // записывает в БД правильные ответы (id - это из таблицы TrashCan)

module.exports = router;
