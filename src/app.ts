import express, { Application } from "express";
import cors from "cors";
import notFound from "./app/middleware/notFound";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import router from "./app/routes";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Library Management System");
});

app.use("/api", router);
// Error handling middleware
app.use(globalErrorHandler);
app.use(notFound);
export default app;
