import prisma from "../../config/prisma";

const createBookIntoDB = async (data: any, res: any) => {
  const result = await prisma.book.create({ data });
  return result;
};
const getAllBooksFromDB = async (res: any) => {
  const result = await prisma.book.findMany({});
  return result;
};
const getSingleBookFromDB = async (id: string, res: any) => {
  const result = await prisma.book.findUnique({ where: { bookId: id } });
  return result;
};  
const updateBookIntoDB = async (id: string, data: any, res: any) => {
  const result = await prisma.book.update({ where: { bookId: id }, data });
  return result;
};
const deleteBookFromDB = async (id: string, res: any) => {
  const result = await prisma.book.delete({ where: { bookId: id } });
  return result;
};

export const BookService = { createBookIntoDB, getAllBooksFromDB, getSingleBookFromDB, updateBookIntoDB, deleteBookFromDB };
