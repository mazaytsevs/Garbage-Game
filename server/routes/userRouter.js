const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const { checkLogin } = require('../middlewares/middleware');

router.get('/check', checkLogin, (req, res) => {
  const user = {
    id: req.session.user.id,
    name: req.session.user.name,
  };
  try {
    res.json(user); // отправляет зарегестрированного юзера и id если такой залогинен
  } catch (err) {
    console.log('Не удалось проверить регистрацию', err);
  }
}); // проверка авторизации

router.post('/reg', async (req, res) => {
  const {
    name,
    email,
    password,
  } = req.body;
  try {
    if (name && password && email) {
      console.log('REQ BODY-------> SIGNUP', JSON.parse(JSON.stringify(req.body)));
      const newUser = await User.create({
        name,
        email,
        password: await bcrypt.hash(password, Number(process.env.SALTROUNDS)),
      });
      req.session.name = {
        id: newUser.id,
        name: newUser.name,
      };
      req.session.user = {
        id: newUser.id,
        name: newUser.name,
      };
      res.sendStatus(200); // отправляет статус 200, если юзер зарегестрировался
    } else {
      console.log('Введите все данные для пользователя');
    }
  } catch (err) {
    console.log('Не получилось зарегистрировать', err);
  }
}); // регистрация

router.post('/login', checkLogin, async (req, res) => {
  const {
    email,
    password,
  } = req.body;
  try {
    if (email && password) {
      const currentUser = await User.findOne({
        where: {
          email,
        },
      });
      if (currentUser && await bcrypt.compare(password, currentUser.password)) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
        };
      }
      res.sendStatus(200); // отправляет статус 200, если юзер залогинился
    } else {
      console.log('Введите все данные для пользователя');
    }
  } catch (err) {
    console.log('Не удалось загрузить игровые элементы', err);
  }
}); // авторизация

router.get('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('sid').redirect('/');
    res.sendStatus(200); // отправляет статус 200, если юзер раззалогинился
  } catch (err) {
    console.log('Не удалось выйти из системы', err);
  }
}); // разлогинивание

module.exports = router;
