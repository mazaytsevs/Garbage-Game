const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const { checkLogin } = require('../middlewares/middleware');

router.route('/reg')
  .get(checkLogin, (req, res) => {
    res.render('signup');
  })
  .post(async (req, res) => {
    const {
      name,
      email,
      password,
    } = req.body;
    if (name && password && email) {
      console.log('REQ BODY-------> SIGNUP', JSON.parse(JSON.stringify(req.body)));
      try {
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
        return res.redirect('/');
      } catch (err) {
        console.log('Не получилось зарегистрировать', err);
        // res.redirect('/');
      }
    } else {
      return res.redirect('/');
    }
  });

router.route('/login')
  .get(checkLogin, (req, res) => {
    res.render('signin');
  })
  .post(async (req, res) => {
    const {
      email,
      password,
    } = req.body;
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
        return res.redirect('/');
      }
    } else {
      res.redirect('/user/signin');
    }
  });

router.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('sid').redirect('/');
  });

module.exports = router;
