import mysql from 'mysql2';

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // Substitua pelo seu usuário MySQL
  password: 'password', // Substitua pela sua senha
  database: 'task_manager_db'
});

db.connect((err) => {
  if (err) {
    console.log('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

export default db;