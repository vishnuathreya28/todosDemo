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

exports.updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo Not Found' });
        }

        // Toggle the 'completed' variable
        todo.compeleted = true;

        const updatedTodo = await todo.save();
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteTodo = async(req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if(!todo){
            return res.status(400).json({message:'Todo Not Found'});
        }

        await todo.deleteOne();
        res.json({ message: 'Todo Deleted Succesfully!' })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}