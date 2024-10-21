import Task from '../models/taskModel.js';

// Criar uma nova tarefa
export const createTask = (req, res) => {
  const { title, description, dueDate } = req.body;

  Task.create({ title, description, dueDate }, (err, result) => {
    if (err) return res.status(500).json({ message: 'Erro ao criar tarefa' });
    res.status(201).json({ message: 'Tarefa criada com sucesso!', taskId: result.insertId });
  });
};

// Listar todas as tarefas
export const getTasks = (req, res) => {
  Task.findAll((err, tasks) => {
    if (err) return res.status(500).json({ message: 'Erro ao buscar tarefas' });
    res.json(tasks);
  });
};

// Buscar uma tarefa por ID
export const getTaskById = (req, res) => {
  const id = req.params.id;

  Task.findById(id, (err, tasks) => {
    if (err || tasks.length === 0) return res.status(404).json({ message: 'Tarefa não encontrada' });
    res.json(tasks[0]);
  });
};

// Atualizar uma tarefa
export const updateTask = (req, res) => {
  const id = req.params.id;
  const { title, description, dueDate } = req.body;

  Task.update(id, { title, description, dueDate }, (err) => {
    if (err) return res.status(500).json({ message: 'Erro ao atualizar tarefa' });
    res.json({ message: 'Tarefa atualizada com sucesso!' });
  });
};

// Excluir uma tarefa
export const deleteTask = (req, res) => {
  const id = req.params.id;

  Task.delete(id, (err) => {
    if (err) return res.status(500).json({ message: 'Erro ao excluir tarefa' });
    res.json({ message: 'Tarefa excluída com sucesso!' });
  });
};