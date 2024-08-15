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
    created_at: TimeStamp;
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
    created_at: TimeStamp;
};

export type Device = {
    code: number;
    name: string;
    created_at: TimeStamp;
}

export type Topical = {
    code: number;
    compound: string;
    route: string;
    created_at: TimeStamp;
}

export type Receipt = {
    receipt: Pharmaceutical | Device | Topical;
    receiptDate: Date;
    created_at: TimeStamp;
}