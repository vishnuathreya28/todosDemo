const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/displayTodo', todoController.getTodos);

router.post('/addTodo', todoController.CreateTodo);

module.exports = router;