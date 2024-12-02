import { Router } from "express";
import { BookRoute } from "../modules/book/book.route";
import { MemberRoute } from "../modules/member/member.routes";
import path from "path";
import { BorrowRoute } from "../modules/borrow/borrow.routes";
import { ReturnRoute } from "../modules/return/return.routes";
const router = Router();
const modulesRoutes = [
  {
    path: "/books",
    route: BookRoute,
  },
  {
    path: "/members",
    route: MemberRoute,
  },
  {
    path: "/borrow",
    route: BorrowRoute,
  },
  {
    path: "/return",
    route: ReturnRoute,
  },
];

modulesRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
