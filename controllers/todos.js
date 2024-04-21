// const User = require('../models/user');

// module.exports = {
//     creat,
//   };

// async function creat(req, res) {
//     const user = User;
  
//     // Add the user-centric info to req.body (the new review)
//     req.body.user = req.user._id;
//     req.body.userName = req.user.name;
//     req.body.userAvatar = req.user.avatar;
  
//     // We can push (or unshift) subdocs into Mongoose arrays
//     user.push(req.body);
//     console.log('req.body');
//     try {
//       // Save any changes made to the movie doc
//       await user.save();
//     } catch (err) {
//       console.log(err);
//     }
//     res.redirect('/');
//   }