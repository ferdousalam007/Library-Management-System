import prisma from "../../config/prisma";

const createBorrowIntoDB = async (data: any, res: any) => {
  const { bookId, memberId } = data;
  const book = await prisma.book.findUnique({ where: { bookId } });

  // Add a null check before accessing book properties
  if (!book) {
    return res.status(404).json({
      success: false,
      status: 404,
      message: "Book not found",
    });
  }

  // Check for available copies
  if (book.availableCopies <= 0) {
    return res.status(400).json({
      success: false,
      status: 400,
      message: "No available copies of the book",
    });
  }
// Check if member has borrowed the book before
  const borrowRecord = await prisma.borrowRecord.create({ data: data });
// Update the available copies of the book
  await prisma.book.update({
    where: { bookId },
    data: { availableCopies: book.availableCopies - 1 },
  });
  const {
    borrowId,
    borrowDate,
    bookId: borrowedBookId,
    memberId: borrowedMemberId,
  } = borrowRecord;
  const borrowList = {
    borrowId,
    borrowDate,
    bookId: borrowedBookId,
    memberId: borrowedMemberId,
  };

  return borrowList;
};


// Get overdue borrow list from DB
const getOverdueBorrowsFromDB = async (res: any) => {
  // Get all borrow records where returnDate is null and borrowDate is less than 14 days ago
  const overdueBooks = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
      borrowDate: {
        lt: new Date(new Date().getTime() - 14 * 24 * 60 * 60 * 1000), // 14 days overdue
      },
    },
    include: {
      book: {
        select: {
          title: true,
        },
      },
      member: {
        select: {
          name: true,
        },
      },
    },
  });
// Map overdue books to a list of objects
  const overdueList = overdueBooks.map((record) => ({
    borrowId: record.borrowId,
    bookTitle: record.book.title,
    borrowerName: record.member.name,
    overdueDays: Math.floor(
      (new Date().getTime() - record.borrowDate.getTime()) /
        (1000 * 60 * 60 * 24)
    ),
  }));

  if (overdueList.length > 0) {
    res.status(200).json({
      success: true,
      status: 200,
      message: "Overdue borrow list fetched",
      data: overdueList,
    });
  } else {
    res.status(200).json({
      success: true,
      status: 200,
      message: "No overdue books",
      data: [],
    });
  }
};

export const BorrowService = {
  createBorrowIntoDB,
  getOverdueBorrowsFromDB,
};
