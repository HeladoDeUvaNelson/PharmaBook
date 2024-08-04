import CustomError from "./CustomError";

class AccessDeniedError extends CustomError {
    constructor(message: string) {
        super("AccessDenied", 401, message);
    };
};

export default AccessDeniedError;