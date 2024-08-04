import Express from "express";
import { encryptString, decryptString } from "../utils/security";

const authMiddleware = (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    next()
}

export default authMiddleware;