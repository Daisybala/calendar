const Todo = require("../models/todo");
const Category = require('../models/category');

module.exports = {
    create,
    delete: deleteTodo,
    edit,
    update
};

async function update(req, res) {
  req.body.completed = !!req.body.completed;
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      {_id: req.params.id, user: req.user._id},
      // update object with updated properties
      req.body,
      // options object {new: true} returns updated doc
      {new: true}
    );
    const date = updatedTodo.date;
    res.redirect(`/year/${date.getFullYear()}/month/${date.getMonth()}/day/${date.getDate()}`);
  } catch (e) {
    console.log(e.message);
    return res.redirect('/');
  }
}

async function edit(req, res) {
  const todo = await Todo.findById(req.params.id);
  const categories = await Category.find({});
  res.render('todos/edit', { todo, categories})
}

async function deleteTodo(req, res) {
  const todo = await Todo.findOneAndDelete({ _id: req.params.tuna, user: req.user._id });
  console.log(req.params);
  console.log(todo);
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