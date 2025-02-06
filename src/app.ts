import express, { Express } from 'express'; // Importando Express em vez de Application
import orderRoutes from './routes/orderRoutes'; // Importação das rotas
import swaggerSetup from './config/swagger'; // Importação da configuração do Swagger
import compression from 'compression'; // Importação do middleware de compressão

const app: Express = express(); // Agora app é do tipo Express

// Middleware para compressão de resposta
app.use(compression());

// Middleware para trabalhar com JSON no corpo da requisição
app.use(express.json());

// Configuração do Swagger
swaggerSetup(app); // Passando a instância do Express para o swaggerSetup

// Definindo as rotas
app.use(orderRoutes); // Utilizando as rotas de pedidos

export default app;
