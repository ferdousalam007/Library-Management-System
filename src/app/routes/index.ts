import { Router } from "express";
import { BookRoute } from "../modules/book/book.route";
const router = Router();
const modulesRoutes = [
  {
    path: "/books",
    route: BookRoute,
  },
];

modulesRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
