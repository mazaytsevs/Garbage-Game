const router = require('express').Router();
const { checkLogin } = require('../middlewares/middleware');

router.route('/')
  .get(checkLogin, (req, res) => {
    
  });

module.exports = router;
