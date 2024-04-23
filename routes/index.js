const express = require('express');
const router = express.Router();
const passport = require('passport');
const indexCtrl = require('../controllers/index');

const ensureLoggedIn = require("../config/ensureLoggedln");

// GET /calendar/year/:year/month/:month/day/:day
router.get('/year/:year/month/:month/day/:day', ensureLoggedIn, indexCtrl.day);

// GET /calendar
router.get('/calendar', ensureLoggedIn, indexCtrl.calendar);

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
