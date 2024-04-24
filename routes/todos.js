const express = require('express');
const router = express.Router();
const todosCtrl = require('../controllers/todos');

// GET /todos/:id/edit
router.get('/:id/edit', todosCtrl.edit);
// DELETE /todos/:id
router.delete('/:id', todosCtrl.delete);
// POST /todos
router.post('/', todosCtrl.create);
// PUT /todos/:id

module.exports = router;