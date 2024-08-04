import Express from "express";
import { encryptString, decryptString } from "../utils/security";
import AccessDeniedError from "../classes/Errors/AccessDeniedError";
import { randomBytes } from "crypto";

const authMiddleware = (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
        
}

export default authMiddleware;