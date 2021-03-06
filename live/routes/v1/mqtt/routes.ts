import express from 'express';
import { RouteController } from './controllers';
import { jwtController } from '../../../controllers';

export default function (): express.Router {

    const router = express.Router();
    router.use("/configuration", jwtController.auth);
    
    /**
     * @swagger
     * /api/v1/configuration:
     *  get:
     *    description: This endpoint returns a Json with the configuration of the mqtt client
     *  responses:
     *      '200':
     *        description: A successful response with broker hostname, topic, port
     */
    router.get('/configuration', RouteController.getConfiguration);

    return router;

}