const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/displayTodo', todoController.getTodos);

router.post('/addTodo', todoController.CreateTodo);

router.put('/updateTodo/:id', todoController.updateTodo);

router.delete('/deleteTodo/:id', todoController.deleteTodo)

module.exports = router;