const checkSession = (req, res, next) => {
  if (req.session.user) {
    res.locals.user = {
      name: req.session.user.name,
      id: req.session.user.id,
    };

    // return next();
  }
  next();
};

const checkLogin = (req, res, next) => {
  console.log(req.session);
  // ПРОВЕРКА АВТОРИЗАЦИИ ЮЗЕРА
  if (!req.session.user) {
    return res.sendStatus(401);
  }
  return next();
};

module.exports = { checkSession, checkLogin };
