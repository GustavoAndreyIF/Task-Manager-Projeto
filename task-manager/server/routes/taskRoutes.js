import express from 'express';
import { createTask, getTasks, getTaskById, updateTask, deleteTask } from '../controllers/taskController.js';

const router = express.Router();

// Rotas para CRUD de tarefas
router.post('/tasks', createTask);      // Criar nova tarefa
router.get('/tasks', getTasks);         // Listar todas as tarefas
router.get('/tasks/:id', getTaskById);  // Buscar tarefa por ID
router.put('/tasks/:id', updateTask);   // Atualizar tarefa
router.delete('/tasks/:id', deleteTask);// Excluir tarefa

export default router;