import { Request, Response } from 'express';
import httpStatus from 'http-status';

// Handling the 404 error
const notFound = (req: Request, res: Response) => {
    return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        status: 404,
        message: 'Not Found',
    });
};

export default notFound;
