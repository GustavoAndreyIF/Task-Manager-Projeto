import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Usar as rotas de tarefas
app.use('/api', taskRoutes);

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});