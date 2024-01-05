const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description: {type:String},
    compeleted: {type:Boolean, default:false},
});

const todo = mongoose.model('Todo', todoSchema);

module.exports = todo;