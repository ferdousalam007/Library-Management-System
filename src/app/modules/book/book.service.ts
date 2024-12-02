import httpStatus from "http-status";
import prisma from "../../config/prisma";
import AppError from "../../errors/ApiError";
//create book into db
const createBookIntoDB = async (data: any, res: any) => {
  const result = await prisma.book.create({ data });
  if (!result) throw new AppError(httpStatus.BAD_REQUEST, "Book not created");
  return result;
};
//get all books from db
const getAllBooksFromDB = async (res: any) => {
  const result = await prisma.book.findMany({});
  if (!result) throw new AppError(httpStatus.NOT_FOUND, "No books found");
  return result;
};
//get single book from db
const getSingleBookFromDB = async (id: string, res: any) => {
  const result = await prisma.book.findUnique({ where: { bookId: id } });
  if (!result) throw new AppError(httpStatus.NOT_FOUND, "Book not found");
  return result;
};
//update book into db
const updateBookIntoDB = async (id: string, data: any, res: any) => {
  const result = await prisma.book.update({ where: { bookId: id }, data });
  if (!result) throw new AppError(httpStatus.NOT_FOUND, "Book not found");
  return result;
};
//delete book from db
const deleteBookFromDB = async (id: string, res: any) => {
  const result = await prisma.book.delete({ where: { bookId: id } });
  if (!result) throw new AppError(httpStatus.NOT_FOUND, "Book not found");
  return result;
};

export const BookService = { createBookIntoDB, getAllBooksFromDB, getSingleBookFromDB, updateBookIntoDB, deleteBookFromDB };
