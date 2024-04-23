const Todo = require("../models/todo");

module.exports = {
    create,
};

async function create(req, res) {
    // Add the user-centric info to req.body (the new review)
    req.body.user = req.user._id;
    try {
      await Todo.create(req.body);
    } catch (err) {
      console.log(err);
    }
    const date = new Date(req.body.date);
    res.redirect(`/year/${date.getFullYear()}/month/${date.getMonth()}/day/${date.getDate()}`);
  }