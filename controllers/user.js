const Todo = require('../models/todo');

const addTodo = async (req, res) => {
  try {
    await new Todo(req.body).save();
    res.json({ status: 'error', message: 'Successfully added todo.' });
  } catch (e) {
    res.json({ status: 'error', message: 'Error adding todo.' });
  }
};

const findAllTodos = async (req, res) => {};
const updateTodo = async (req, res) => {};
const deleteTodo = async (req, res) => {};

module.exports = {
  addTodo,
  findAllTodos,
  updateTodo,
  deleteTodo
};
