const express = require('express');
const todoRouter = express.Router();
const {getTodo,createTodo,updateTodo,deleteTodo} = require('../controller/todoController')
todoRouter.get('/',getTodo)

todoRouter.post('/create', createTodo)

todoRouter.put('/:id',updateTodo)

todoRouter.delete('/:id',deleteTodo)

module.exports = todoRouter;