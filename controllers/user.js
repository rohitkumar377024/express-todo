const Todo = require('../models/todo');

const addTodo = async (req, res) => {
  try {
    await new Todo(req.body).save();
    res.json({ status: 'success', message: 'Successfully added todo.' });
  } catch (e) {
    res.json({ status: 'error', message: 'Error adding todo.' });
  }
};

const findAllTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find();
    res.json({ status: 'success', message: allTodos });
  } catch (e) {
    res.json({ status: 'error', message: 'Could not fetch todos.' });
  }
};

const updateTodo = async (req, res) => {};
const deleteTodo = async (req, res) => {};

module.exports = {
  addTodo,
  findAllTodos,
  updateTodo,
  deleteTodo
};
