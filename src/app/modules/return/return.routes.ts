import { returnController } from "./return.controller";

const router = require('express').Router();

router.post("/", returnController.returnBook);
export const ReturnRoute = router