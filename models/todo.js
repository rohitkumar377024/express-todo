const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({ task: String, details: String });
const todoModel = mongoose.model('todo', todoSchema);

module.exports = todoModel;
