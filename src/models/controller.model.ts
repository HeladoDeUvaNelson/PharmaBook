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
    dateOfBirth?: Date;
    createdAt: TimeStamp;
    updatedAt: TimeStamp;
    address?: string;
    phone?: Array<number>;
    receipt: Array<Receipt>;
};

export type Date = {
    day: number;
    month: number;
    year: number;
};

export type TimeStamp = {
    day: number;
    month: number;
    year: number;
    hour: number;
    minute: number;
    second: number; 
};

export type Pharmaceutical = {
    code: number;
    compound: string;
    route: string;
    dose: number;
    unit: string;
    createdAt: TimeStamp;
    updatedAt: TimeStamp;
};

export type Device = {
    code: number;
    name: string;
    createdAt: TimeStamp;
    updatedAt: TimeStamp;
}

export type Topical = {
    code: number;
    compound: string;
    route: string;
    createdAt: TimeStamp;
    updatedAt: TimeStamp;
}

export type Receipt = {
    receipt: Pharmaceutical | Device | Topical;
    receiptDate: Date;
    createdAt: TimeStamp;
    updatedAt: TimeStamp;
}