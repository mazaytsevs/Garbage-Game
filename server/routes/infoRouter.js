const router = require('express').Router();
const { Trash, TrashCan } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const infoOrigin = await TrashCan.findAll({
      attributes: ['id', 'trash_can_name', 'trash_can_img_src'],
      include: [{ model: Trash, attributes: ['id', 'trash_can_id', 'trash_name', 'trash_img_src', 'info', 'score', 'bonus'] }],
    });
    const info = infoOrigin.map((trashcan) => ({
      id: trashcan.id,
      trash_can_name: trashcan.trash_can_name,
      trash_can_img_src: trashcan.trash_can_img_src,
      trashes: trashcan.Trashes.map((trash) => ({
        trash_id: trash.trash_id,
        trash_name: trash.trash_name,
        trash_img_src: trash.trash_img_src,
        info: trash.info,
        score: trash.score,
        bonus: trash.bonus,
      })),
    }));
    // res.send(info);
    res.json(info);

    // ДЛЯ ФРОНТА ВСТАВЛЯЕМ ЭТО
    // res.render('info', { info });
  } catch (err) {
    console.log('Не получилось отобразить информацию', err);
  }
}); // отправляет данные из базы с информацией о виде мусора и мусоре

module.exports = router;
