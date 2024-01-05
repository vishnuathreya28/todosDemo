const Todo = require('../models/todo');

//get all todos
exports.getTodos = async(req, res) =>{
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//to add a new todo
exports.CreateTodo = async(req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed || false,
    })
    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

