import Express from "express";

export type Controller = {  
    [key: string]: (req: Express.Request, res: Express.Response) => Express.Response;
};

export interface RequestBody<T> extends Express.Request {
    body: T
};

export type Clients = Array<Client>;
 
export type Client = {
    lastName: string;
    firstName: string 
    dni: string; 
    dateOfBirth: Date;
    address: string;
    phone?: Array<number>;
    receipt: Array<Pharmaceutical | Device>;
    receiptDate: Array<Date>;
};

export type Date = {
    day: number;
    month: number;
    year: number;
};

export type Pharmaceutical = {
    code: number;
    compound: string;
    route: string;
    dose: number
};

export type Device = {
    name: string;
}