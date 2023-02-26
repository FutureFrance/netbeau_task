export class SwaggerOptions {
    static getEntities = {
        description: 'Get todos list',
        notes: 'Returns an array of todos',
        tags: ['api'],
    }
    
    static getEntitiesByQuery = {
        description: 'Get todos based on query param',
        notes: 'Returns an array of todos',
        tags: ['api'] 
    }

    static addEntity = {
        description: 'Create a todo',
        notes: 'Returns the created instance, *note*: this public api does not save the created instance just returns it on success',
        tags: ['api'] 
    }

    static getEntityById = {
        description: 'Retrieve an entity by it\'s id',
        notes: 'Returns the entity witht he coresponding id',
        tags: ['api'] 
    }

    static updateEntity = {
        description: 'Update an entity',
        notes: 'Returns the created instance, *note*: this public api does not save the updated instance just returns it on success',
        tags: ['api'] 
    }
}