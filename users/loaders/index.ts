import express  from 'express';
import Logger from './logger';
import expressLoader from './express';
import {swaggerUi, swaggerDocs} from './swagger/docs';

// export default async ({ app }: { app: express.Application }) => {
export module Loader {
    export function defaultLoader({ app }: { app: express.Application }){
        Logger.info('✌️ Dependency Injector NOT loaded');

        expressLoader({app});
        Logger.info('✌️ Express loaded');
        
        app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
        Logger.info('✌️ SwaggerUI loaded');
    }
}
