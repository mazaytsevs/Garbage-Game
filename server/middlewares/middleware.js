const checkSession = (req, res, next) => {
  if (req.session.user) {
    res.locals.user = {
      name: req.session.user.name,
      id: req.session.user.id,
    };

    return next();
  }
  next();
};

const checkLogin = (req, res, next) => {
  // ПРОВЕРКА АВТОРИЗАЦИИ ЮЗЕРА
  if (req.session.user) {
    return res.redirect('/');
  }
  next();
};

module.exports = { checkSession, checkLogin };
