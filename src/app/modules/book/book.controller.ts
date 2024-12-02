import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookService } from "./book.service";

// Create Book controller
const createBook = catchAsync(async (req, res) => {
  const { title, genre, publishedYear, totalCopies, availableCopies } =
    req.body;
  const result = await BookService.createBookIntoDB(req.body, res);
  sendResponse(res, {
    success: true,
    status: 201,
    message: "Book created successfully",
    data: result,
  });
});

// Get all books controller
const getAllBooks = catchAsync(async (req, res) => {
  const result = await BookService.getAllBooksFromDB(res);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Books retrieved successfully",
    data: result,
  });
});

// Get single book controller
const getSingleBookFromDB = catchAsync(async (req: any, res: any) => {
  const { id } = req.params;
  const result = await BookService.getSingleBookFromDB(id, res);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book retrieved successfully",
    data: result,
  });
});

// Update book controller
const updateBookIntoDB = catchAsync(async (req: any, res: any) => {
  const { id } = req.params;
  const result = await BookService.updateBookIntoDB(id, req.body, res);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book updated successfully",
    data: result,
  });
});

// Delete book controller
const deleteBookFromDB = catchAsync(async (req: any, res: any) => {
  const { id } = req.params;
  const result = await BookService.deleteBookFromDB(id, res);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book successfully deleted",
  });
});

export const BookController = { createBook, getAllBooks, getSingleBookFromDB, updateBookIntoDB, deleteBookFromDB };   
