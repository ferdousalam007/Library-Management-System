import express, { Application } from 'express';
import cors from 'cors';
import notFound from './app/middleware/notFound';
import globalErrorHandler from './app/middleware/globalErrorHandler';


const app: Application = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to Library Management System');
});

// Error handling middleware
app.use(globalErrorHandler);
app.use(notFound);
export default app;