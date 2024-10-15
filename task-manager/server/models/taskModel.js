import db from '../config/db.js';

// Modelo de Tarefa
const Task = {
  create: (taskData, callback) => {
    const query = 'INSERT INTO tasks (title, description, dueDate) VALUES (?, ?, ?)';
    db.query(query, [taskData.title, taskData.description, taskData.dueDate], callback);
  },

  findAll: (callback) => {
    const query = 'SELECT * FROM tasks';
    db.query(query, callback);
  },

  findById: (id, callback) => {
    const query = 'SELECT * FROM tasks WHERE id = ?';
    db.query(query, [id], callback);
  },

  update: (id, taskData, callback) => {
    const query = 'UPDATE tasks SET title = ?, description = ?, dueDate = ? WHERE id = ?';
    db.query(query, [taskData.title, taskData.description, taskData.dueDate, id], callback);
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM tasks WHERE id = ?';
    db.query(query, [id], callback);
  }
};

export default Task;