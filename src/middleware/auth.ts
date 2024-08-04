import Express from "express";
import { encryptString, decryptString } from "../utils/security";
import AccessDeniedError from "../classes/Errors/AccessDeniedError";

const authMiddleware = (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    let encriptMess = /mock database/;
    
    try {
        next()
    } catch (error) {
        throw new AccessDeniedError("Not valid certificate!");
    }
        
}

export default authMiddleware;