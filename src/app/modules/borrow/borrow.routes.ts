const router = require('express').Router();
import { BorrowController } from "./borrow.controller";




router.post("/", BorrowController.createBorrow);
router.get("/overdue", BorrowController.getOverdueBorrows);



export const BorrowRoute = router