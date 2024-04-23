const express = require('express');
const router = express.Router();
const todosCtrl = require('../controllers/todos');


// POST /todos
router.post('/', todosCtrl.create);


module.exports = router;