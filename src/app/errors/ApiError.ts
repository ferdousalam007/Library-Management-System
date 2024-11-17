class AppError extends Error {
    public status: number;
    public isOperational: boolean;

    constructor(statusCode: number, message: string, stack = '') {
        super(message);

        this.message = message;
        this.status = statusCode;
        this.isOperational = true;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default AppError;
