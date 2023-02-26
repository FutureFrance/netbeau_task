export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface ITodoResponse {
    response?: ITodo | ITodo[],
    status: boolean
}