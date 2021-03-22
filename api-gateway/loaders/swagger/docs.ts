import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Gateway APIs",
        description: "Gateway API Information",
        contact: {
          name: "Luca Martinelli"
        },
        servers: ["http://localhost:3000"]
      }
    },
    apis: ['./routes/v1/gateway/routes.ts','./loaders/express/index.ts']
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);


export {swaggerUi, swaggerDocs}