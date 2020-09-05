const router = require('express').Router();
const userController = require('../controllers/user');

router.get('/', userController.findAllTodos);
router.post('/', userController.addTodo);
router.patch('/:id', userController.updateTodo);
router.delete('/:id', userController.deleteTodo);

module.exports = router;
