const express = require('express');
const router = express.Router();
const todosCtrl = require('../controllers/todos');


// // DELETE /todos/:id
router.delete('/:id', todosCtrl.delete);
// POST /todos
router.post('/', todosCtrl.create);


module.exports = router;