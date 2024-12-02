import httpStatus from "http-status";
import prisma from "../../config/prisma";
import AppError from "../../errors/ApiError";
//create member into db
const createMemberIntoDB = async (data: any, res: any) => {
  //save member data into db
  const result = await prisma.member.create({ data });
  if (!result) throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "Error creating member");
  return result;
};
//get all members from db
const getAllMembersFromDB = async (res: any) => {
  //get all members from db
  const result = await prisma.member.findMany({});
  return result;
};
//get single member from db
const getSingleMemberFromDB = async (id: string, res: any) => {
  //get single member from db
  const result = await prisma.member.findUnique({ where: { memberId: id } });
  if (!result) throw new AppError(httpStatus.NOT_FOUND, "Member not found");
  return result;
};
//update member into db
const updateMemberIntoDB = async (id: string, data: any, res: any) => {
  //update member data into db
  const result = await prisma.member.update({ where: { memberId: id }, data });
  if (!result) throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "Member not found");
  const { memberId, name, email, phone } = result;
  const member = {
    name,
    email,
    phone,
    memberId,
  };

  return member;
};
//delete member from db
const deleteMemberFromDB = async (id: string, res: any) => {
  //delete member from db
  const result = await prisma.member.delete({ where: { memberId: id } });
  if (!result) throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "Member not found");
  return result;
};

export const MemberService = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getSingleMemberFromDB,
  updateMemberIntoDB,
  deleteMemberFromDB,
};
