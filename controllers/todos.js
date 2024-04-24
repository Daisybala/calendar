const Todo = require("../models/todo");

module.exports = {
    create,
    delete: deleteTodo
};

async function deleteTodo(req, res) {
  const todo = await Todo.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  const date = todo.date;
  res.redirect(`/year/${date.getFullYear()}/month/${date.getMonth()}/day/${date.getDate()}`);
}
// async function deleteTodo(req, res) {
//   const todo = await Todo.findOne({ 'todos._id': req.params.id, 'todos.user': req.user._id});
//   console.log(req.body);
//   Todo.deleteOne(req.params.id);
//   const date = new Date(req.body.date);
//   res.redirect(`/year/${date.getFullYear()}/month/${date.getMonth()}/day/${date.getDate()}`);
// }

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