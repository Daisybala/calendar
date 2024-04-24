const Todo = require("../models/todo");
const Category = require('../models/category');

module.exports = {
    create,
    delete: deleteTodo,
    edit
};

async function edit(req, res) {
  const todo = await Todo.findById(req.params.id);
  const categories = await Category.find({});
  res.render('todos/edit', { todo, categories})
}

async function deleteTodo(req, res) {
  const todo = await Todo.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  if (!todo) return res.redirect('/');
  const date = todo.date;
  res.redirect(`/year/${date.getFullYear()}/month/${date.getMonth()}/day/${date.getDate()}`);
}

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