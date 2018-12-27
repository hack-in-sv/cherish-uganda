var express = require('express');
var router = express.Router();

// TODO group page templates in here?

// TODO handle with passport
router.get('/login', (req, res, next) => {
  console.log('logging in');
  res.render('auth/login', { title: 'Express' });
});

router.get('/register', (req, res, next) => {
  console.log('logging in');
  res.render('auth/register', { title: 'Express' });
});

router.get('/logout', (req, res, next) => {
  console.log('logging in');
  res.render('index', { title: 'Express' });
  res.render('auth/logout', { title: 'Express' });
});

module.exports = router;