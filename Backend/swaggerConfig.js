import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Definir la configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentation for your API',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Cambia esto con la URL de tu API en producción
        description: 'Development server',
      },
    ],
  },
  // Especificar los archivos que contienen las rutas que quieres documentar
  apis: ['./swagger.yaml'],
};

// Inicializar Swagger
const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default {swaggerSpec, swaggerUi};
