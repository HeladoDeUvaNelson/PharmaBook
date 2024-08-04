import CustomError from "./CustomError";

class NotFoundError extends CustomError {
    constructor(message: string) {
        super("NotFound", 404, message);
    };
};

export default NotFoundError;