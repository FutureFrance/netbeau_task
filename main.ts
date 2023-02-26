import Hapi from '@hapi/hapi';
import dotenv from 'dotenv';
import * as Inert from "@hapi/inert";
import Vision from '@hapi/vision';
import * as HapiSwagger from "hapi-swagger";

import { routes } from './src/routes';
import { swaggerOptions } from './src/swaggeroptions';

dotenv.config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = Hapi.server({
    port: PORT,
    host: HOST
});

app.route(routes); 

const start = async () => {    
    await app.register([Inert, Vision, {plugin: HapiSwagger, options: swaggerOptions}]);
    await app.start();

    console.log(`Server is listening on port: ${PORT}`);
}

start();