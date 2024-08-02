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
    receipt: Array<Receipt>;
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
    dose: number;
    unit: string;
};

export type Device = {
    code: number;
    name: string;
}

export type Topical = {
    code: number;
    compound: string;
}

export type Receipt = {
    receipt: Pharmaceutical | Device | Topical;
    receiptDate: Date;
}