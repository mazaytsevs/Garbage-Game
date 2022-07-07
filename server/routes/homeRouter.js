const router = require('express').Router();
const Sequelize = require('sequelize');

router.get('/', async (req, res) => {
  res.render('home');
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    await Product.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

router.post('/product/:name', async (req, res) => {
  const { productNameToFind } = req.body;
  const foundProducts = await Product.findAll({
    where: { product_name: productNameToFind },
  });
  // console.log('НАШЕЛ', JSON.parse(JSON.stringify(foundProducts)));
  res.json(JSON.parse(JSON.stringify(foundProducts)));
});

router.put('/edit/:id', async (req, res) => {
  try {
    const { id, newProductName } = req.body;
    // console.log(id, newProductName);
    await Product.update({ product_name: newProductName }, { where: { id } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

router.post('/edit/like/:id', async (req, res) => {
  try {
    const result = await Like.findAll({
      where: { user_id: req.session.user.id, product_id: req.body.id },
    });
    if (result.length === 0) {
      await Like.create({
        user_id: req.session.user.id,
        product_id: req.body.id,
      });
      res.sendStatus(200);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
