import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookService } from "./book.service";

const createBook = catchAsync(async (req, res) => {
  const { title, genre, publishedYear, totalCopies, availableCopies } =
    req.body;
  const result = BookService.createBookIntoDB(req.body, res);
  sendResponse(res, {
    success: true,
    status: 201,
    message: "Book created successfully",
    data: result,
  });
});

const getAllBooks = catchAsync(async (req, res) => {
  const result = await BookService.getAllBooksFromDB(res);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Books retrieved successfully",
    data: result,
  });
});
const getSingleBookFromDB = async (id: string, res: any) => {
  const result = await BookService.getSingleBookFromDB(id, res);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book retrieved successfully",
    data: result,
  });
};
const updateBookIntoDB = async (id: string, data: any, res: any) => {
  const result = await BookService.updateBookIntoDB(id, data, res);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book updated successfully",
    data: result,
  });
};
const deleteBookFromDB = async (id: string, res: any) => {
  const result = await BookService.deleteBookFromDB(id, res);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book successfully deleted",
  });
};
export const BookController = { createBook, getAllBooks, getSingleBookFromDB, updateBookIntoDB, deleteBookFromDB };   
