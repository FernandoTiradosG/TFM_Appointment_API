import express from 'express';
import config from './config.js';
import { init } from './loaders/index.js';
import swaggerConfig from '../swaggerConfig.js';

const app = express();

init(app, config); 

app.use('/api-docs', swaggerConfig.swaggerUi.serve, swaggerConfig.swaggerUi.setup(swaggerConfig.swaggerSpec)); // Accede a las propiedades correctamente
export default app;