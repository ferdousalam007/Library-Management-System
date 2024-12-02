import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MemberService } from "./member.service";

// Create Member Controller
const createMember=catchAsync(async(req,res)=>{
    const result=await MemberService.createMemberIntoDB(req.body,res);
    sendResponse(res, {
        success: true,
        status: 201,
        message: "Member created successfully",
        data: result,
    });
})
// Get All Members Controller
const getAllMembers=catchAsync(async(req,res)=>{
    const result=await MemberService.getAllMembersFromDB(res);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Members retrieved successfully",
        data: result,
    });
})
// Get Single Member Controller
const getSingleMemberFromDB = catchAsync(async (req: any, res: any) => {
    const { id } = req.params;
    const result = await MemberService.getSingleMemberFromDB(id, res);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Member retrieved successfully",
        data: result,
    });
});
// Update Member Controller
const updateMemberIntoDB = catchAsync(async (req: any, res: any) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const data = { name, email, phone };
    const result = await MemberService.updateMemberIntoDB(id, data, res);
    
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Member updated successfully",
        data: result,
    });
});
// Delete Member Controller
const deleteMemberFromDB = catchAsync(async (req: any, res: any) => {
    const { id } = req.params;
    const result = await MemberService.deleteMemberFromDB(id, res);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Member successfully deleted",
    });
});
export const MemberController = { createMember, getAllMembers, getSingleMemberFromDB, updateMemberIntoDB, deleteMemberFromDB };