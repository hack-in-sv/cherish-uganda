const express = require('express');
const passport = require('passport');
const router = express.Router();

// TODO group page templates in here?

// TODO handle with passport
router.get('/login', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/register', (req, res, next) => {
  console.log('logging in');
  res.send("Signed in");
});

router.get('/google/callback', passport.authenticate('google'), (req, res, next) => {
  console.log('logging in');
  res.render('auth/register', { title: 'Express' });
});


router.get('/logout', (req, res, next) => {
  console.log('logging in');
  res.render('index', { title: 'Express' });
  res.render('auth/logout', { title: 'Express' });
});

module.exports = router;