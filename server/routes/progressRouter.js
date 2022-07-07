const router = require('express').Router();
const Sequelize = require('sequelize');
const { User, Progress } = require('../db/models');
const { checkSession } = require('../middlewares/middleware');

router.get('/', checkSession, async (req, res) => {
  try {
    const progressOrigin = await User.findOne({
      where: { id: req.session.user.id },
      include: [{ model: Progress, attributes: [] }],
      attributes:
        ['id', 'name', [Sequelize.fn('SUM', Sequelize.col('Progresses.score')), 'score']],
      group: ['User.id'],
    });
    res.send(progressOrigin);
  } catch (err) {
    console.log('Не удалось загрузить прогресс', err);
  }
});

router.post('/answer', checkSession, async (req, res) => {
  try {

  } catch (err) {
    console.log('Не удалось загрузить прогресс', err);
  }
})

module.exports = router;
