import { AppController } from './controllers/controller';
import { BodyValidation } from './validation/validations';
import { SwaggerOptions } from './options';

export const routes = [
    { method: "GET", path: "/", handler: AppController.getEntities,
        options: SwaggerOptions.getEntities            
    },
    { method: "GET", path: "/{id}", handler: AppController.getEntityById, 
        options: {
            ...SwaggerOptions.getEntityById,
            validate: BodyValidation.getById
        }
    },
    { method: "GET", path: "/query", handler: AppController.getEntityByQuery, 
        options: { 
            ...SwaggerOptions.getEntitiesByQuery,
            validate: BodyValidation.getByQuery
        }
    },
    { method: "POST", path: "/add", handler: AppController.addEntity, 
        options: {
            ...SwaggerOptions.addEntity,
            validate: BodyValidation.addEntity
        }
    },
    { method: "PUT", path: "/update", handler: AppController.updateEntity, 
        options: {
            ...SwaggerOptions.updateEntity,
            validate: BodyValidation.updateEntity
        }
    }
];