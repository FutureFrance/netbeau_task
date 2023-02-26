import { Request, ResponseObject, ResponseToolkit } from "@hapi/hapi";
import { ITodo } from "../interfaces/todo.interface";
import { appService } from "../services/service";

export class AppController {
    static async getEntities(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
        const entities = await appService.getEntities();

        if (!entities.status) return h.response("Unable to get the entities").code(400);

        return h.response(entities.response).code(200);
    }

    static async getEntityById(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
        const entity = await appService.getEntityById(request.params.id);

        if (!entity.status) return h.response("Unable to get the entity").code(400);

        return h.response(entity.response).code(200);
    }

    static async getEntityByQuery(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
        const entities = await appService.getEntitiesByProperty(request.query);

        if (!entities.status) return h.response("Unable to get the entity").code(400);

        return h.response(entities.response).code(200);
    }

    static async addEntity(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
        const newEntity = await appService.addEntity(request.payload as ITodo);

        if (!newEntity.status) return h.response("Unable to create the entity").code(400);

        return h.response(newEntity.response).code(201);
    }

    static async updateEntity(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
        const updatedEntity = await appService.updateEntity(request.payload as ITodo);

        if (!updatedEntity.status) return h.response("Unable to update the entity, external api didnt respond with data").code(400);

        return h.response(updatedEntity.response).code(200);
    }
}
