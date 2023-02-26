import Joi from 'joi';

export class BodyValidation {
    static addEntity = {
        payload: Joi.object({
            userId: Joi.number().min(0).max(10000).required(),
            title: Joi.string().min(2).max(100).required(),
            completed: Joi.boolean().required()
        })
    }

    static getById = {
        params: Joi.object({
            id: Joi.number().min(0).max(10000).required()
        })
    }

    static getByQuery = {
        query: Joi.object({
            id: Joi.number().min(0).max(10000).optional(),
            title: Joi.string().min(2).max(100).optional(),
            completed: Joi.boolean().optional()
        })
    }

    static updateEntity = {
        payload: Joi.object({
            userId: Joi.number().min(0).max(10000).required(),
            id: Joi.number().min(0).max(10000).required(),
            title: Joi.string().min(2).max(100).required(),
            completed: Joi.boolean().required()
        })
    }
}

