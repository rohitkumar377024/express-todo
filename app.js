const express = require('express');
const mongoose = require('mongoose');

const app = express();

const todoRouter = require('./routes/todo');
app.use('/todo', todoRouter);

const run = async () => {
  await mongoose.connect(
    'mongodb+srv://admin-rohit:test123@cluster0-exv7e.mongodb.net/furniture-store',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  app.listen(3000, () => console.log('Listening on Port 3000'));
};

run();
