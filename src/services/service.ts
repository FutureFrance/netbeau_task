import dotenv from 'dotenv';
import axios from 'axios';
import { ITodo, ITodoResponse } from '../interfaces/todo.interface';

dotenv.config();

const EXTERNAL_API = process.env.EXTERNAL_API as string;

class AppService {
    async getEntities(): Promise<ITodoResponse> {
        try {
            const response = await axios.get(`${EXTERNAL_API}`);
        
            return { status: true, response: response.data };  
        } catch(err) {
            return { status: false };
        }
        
    }

    async getEntitiesByProperty(property: any): Promise<ITodoResponse> {
        try {
            const param = Object.keys(property)[0];
            const value = property[param];

            const response = await axios.get(`${EXTERNAL_API}?${param}=${value}`);

            return { status: true, response: response.data };  
        }catch(err) {
            return { status: false };
        }        
    }

    async getEntityById(id: string): Promise<ITodoResponse>{
        try {
            const response = await axios.get(`${EXTERNAL_API}${id}`);

            return { status: true, response: response.data };  
        }catch(err) {
            return { status: false };
        }
    }

    async addEntity(properties: ITodo): Promise<ITodoResponse> {
        try {
            const response = await axios.post(`${EXTERNAL_API}`, {
                ...properties
            });

            return { status: true, response: response.data };  
        } catch(err) {
            return { status: false };
        }
    }

    async updateEntity(properties: Partial<ITodo>): Promise<ITodoResponse> { // this will 'error' to test the error handling
        try {
            const response = await axios.put(`${EXTERNAL_API}`, {
                ...properties
            });
    
            return { status: true, response: response.data };  
        }catch(err) {
            return { status: false };
        }
    }
}

export const appService = new AppService();