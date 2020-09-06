// Importing mongoose
const mongoose = require('mongoose');

// Creating a schema to show how a Todo's structure will look like
const todoSchema = mongoose.Schema({ task: String, details: String });
//create a collection in the database with first argument name pluralized
//Act as a helper to interact with the collection
const todoModel = mongoose.model('todo', todoSchema);

// Exporting the todo model
module.exports = todoModel;
