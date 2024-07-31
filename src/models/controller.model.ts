import Express from "express";

export type Controller = {  
    [key: string]: (req: Express.Request, res: Express.Response) => Express.Response;
};

export interface RequestBody<T> extends Express.Request {
    body: T
}

export type Clients = Array<Client>
 
export type Client = {
    lastFirstName: string; 
    dni: string; 
    dateOfBirth: date; 
    pharmaceutical: pharmaceutical;
    receiptDate: Array<date>
}

export type date = {
    day: number,
    month: number,
    year: number
}

export type pharmaceutical = {
    compound: string,
}