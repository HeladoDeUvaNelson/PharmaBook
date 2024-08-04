import { Request, Response, NextFunction } from "express";
import CustomError from "../classes/Errors/CustomError";

const error = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode).json({ error: err.message });
};

export default error;