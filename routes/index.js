const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Calendar' });
});

// router.get('/auth/google', passport.authenticate(
//   // Which passport strategy is being used?
//   'google',
//   {
//     // Requesting the user's profile and email
//     scope: ['profile', 'email'],
//     // Optionally force pick account every time
//     // prompt: "select_account"
//   }
// ));

// router.get('/oauth2callback', passport.authenticate(
//   'google',
//   {
//     successRedirect: '?',
//     failureRedirect: '?'
//   }
// ));

// router.get('/logout', function(req, res){
//   req.logout(function() {
//     res.redirect('/movies');
//   });
// });

module.exports = router;
