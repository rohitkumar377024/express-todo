// Importing express, mongoose and body-parse
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initializing express
const app = express();

// Setting up body-parser to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting up our todo router
const todoRouter = require('./routes/todo');
app.use('/todos', todoRouter);

// Connect to mongoose server and start listening on port 3000
const run = async () => {
  await mongoose.connect(
    'mongodb+srv://admin-rohit:test123@cluster0-exv7e.mongodb.net/todo',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  app.listen(3000, () => console.log('Listening on Port 3000'));
};

run();
