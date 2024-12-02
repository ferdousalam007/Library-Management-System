import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { returnService } from "./return.service";

//returnBook controller
const returnBook = catchAsync(async (req: any, res: any) => {

    const result = await returnService.returnBookIntoDB(req, res);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Book returned successfully",
        data: result,
    });
});
export const returnController = { returnBook }