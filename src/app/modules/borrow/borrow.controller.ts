import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BorrowService } from "./borrow.service";

// Create borrow controller
const createBorrow = catchAsync(async (req: any, res: any) => {
    const result = await BorrowService.createBorrowIntoDB(req.body, res);
    sendResponse(res, {
        success: true,
        status: 201,
        message: "Book borrowed successfully",
        data: result,
    });
});

// Get overdue borrow controller
const getOverdueBorrows = catchAsync(async (req: any, res: any) => {
    const result = await BorrowService.getOverdueBorrowsFromDB(res);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Overdue borrow list fetched",
        data: result,
    });
});


export const BorrowController = { createBorrow,  getOverdueBorrows };