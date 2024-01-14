const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');
const cors = require('cors');

const app = express();
const PORT = 3001;

//acts as the middleware parsing the incoming request bodies before we use the data
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/todo', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('Connected', () =>{
    console.log('Connected Successfully to DB');
});

mongoose.connection.on('error', (err) =>{
    console.log('Error Connecting to DB');
});

app.use('/api/todos', todoRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});