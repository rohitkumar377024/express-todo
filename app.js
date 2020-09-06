const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const todoRouter = require('./routes/todo');
app.use('/todos', todoRouter);

const run = async () => {
  await mongoose.connect(
    'mongodb+srv://admin-rohit:test123@cluster0-exv7e.mongodb.net/todo',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  app.listen(3000, () => console.log('Listening on Port 3000'));
};

run();
