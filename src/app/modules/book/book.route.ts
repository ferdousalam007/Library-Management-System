import { BookController } from "./book.controller";

const router = require('express').Router();


router.post("/", BookController.createBook);
router.get("/", BookController.getAllBooks);
router.get("/:id", BookController.getSingleBookFromDB);
router.patch("/:id", BookController.updateBookIntoDB);
router.delete("/:id", BookController.deleteBookFromDB);

export const BookRoute = router