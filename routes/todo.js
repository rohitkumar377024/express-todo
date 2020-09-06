// Importing express router
const router = require('express').Router();
// Importing controller
const userController = require('../controllers/user');

// Setting up todo endpoints
router.get('/', userController.findAllTodos);
router.post('/', userController.addTodo);
router.patch('/:uid', userController.updateTodo);
router.delete('/:uid', userController.deleteTodo);

// Exporting our router
module.exports = router;
