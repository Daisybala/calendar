const express = require('express');
const router = express.Router();
const passport = require('passport');
const user = require('../models/user');
const indexCtrl = require('../controllers/index');
console.log(user);

// GET /calendar
router.get('/calendar', indexCtrl.calendar);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Calendar' });
});

router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/calendar',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});
module.exports = router;
