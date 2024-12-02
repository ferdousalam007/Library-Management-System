import prisma from "../../config/prisma";


//  return a book into the database
const returnBookIntoDB = async (data: any, res: any) => {
    const { borrowId } = data.body;

    // Find the borrow record
    const borrowRecord = await prisma.borrowRecord.findUnique({
        where: { borrowId },
    });
    if (!borrowRecord) {
        return res.status(404).json({
            success: false,
            status: 404,
            message: "Borrow record not found",
        });
    }
    if (borrowRecord.returnDate) {
        return res.status(400).json({
            success: false,
            status: 400,
            message: "Book already returned",
        });
    }
    // Update borrow record with return date
    await prisma.borrowRecord.update({
        where: { borrowId },
        data: {
            returnDate: new Date(),
        },
    });
    // Find the book record 
    const book = await prisma.book.findUnique({
        where: { bookId: borrowRecord.bookId },
    });

    if (!book) {
        return res.status(404).json({
            success: false,
            status: 404,
            message: "Book not found",
        });
    }
    // Update book's available copies

    await prisma.book.update({
        where: { bookId: borrowRecord.bookId },
        data: {
            availableCopies: book.availableCopies + 1,
        },
    });
    res.status(200).json({
        success: true,
        status: 200,
        message: "Book returned successfully",
    });
};
export const returnService = { returnBookIntoDB };