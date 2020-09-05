const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({ task: String, details: String });
const todoModel = mongoose.Model('todo', todoSchema);

module.exports = todoModel;
