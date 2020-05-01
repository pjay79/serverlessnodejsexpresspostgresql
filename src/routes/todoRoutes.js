const express = require('express');
const router = express.Router();
const app = express();

const todoController = require('../controllers/todoController');

router.get('/todos', todoController.allTodos);
router.post('/todos/', todoController.createTodo);
router.get('/todos/:todoId', todoController.getTodo);
router.put('/todos/:todoId', todoController.updateTodo);
router.delete('/todos/:todoId', todoController.deleteTodo);

module.exports = router;