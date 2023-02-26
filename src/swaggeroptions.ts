import * as HapiSwagger from 'hapi-swagger';

export const swaggerOptions: HapiSwagger.RegisterOptions = {
    info: {
        title: 'Test API Documentation',
        version: "1.0.1",
    },
    tags: [{
        name: 'api',
        description: 'This is the basic api'
    }],
    grouping: 'tags',
    tagsGroupingFilter: (tag)=> !!tag,
    documentationPath: '/swagger'
};