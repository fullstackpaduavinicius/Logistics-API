// src/config/swagger.ts
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { Express } from 'express';

const swaggerDocument = YAML.load('./src/config/swagger.yaml');

const swaggerSetup = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export default swaggerSetup;
