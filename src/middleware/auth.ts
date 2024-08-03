import Express from "express";
import fs from "fs";
const crypto = require('crypto');


const SHA: string | undefined = process.env.SHA;

const authMiddleware = (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    if (!SHA) return;
    next()
}

export default authMiddleware;