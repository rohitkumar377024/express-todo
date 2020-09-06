const router = require('express').Router();
const userController = require('../controllers/user');

router.get('/', userController.findAllTodos);
router.post('/', userController.addTodo);
router.patch('/:uid', userController.updateTodo);
router.delete('/:uid', userController.deleteTodo);

module.exports = router;
