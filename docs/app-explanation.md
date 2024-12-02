# Library Management System - Main Application File (app.ts) Explanation

## Overview
This file (`app.ts`) is the main application configuration file for the Library Management System. It sets up an Express.js server with necessary middleware and routing configurations.

## Code Breakdown

### Imports
```typescript
import express, { Application } from "express";
import cors from "cors";
import notFound from "./app/middleware/notFound";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import router from "./app/routes";
```
- `express`: The main web framework for Node.js
- `cors`: Middleware to enable Cross-Origin Resource Sharing
- `notFound`: Custom middleware for handling 404 errors
- `globalErrorHandler`: Custom middleware for handling application-wide errors
- `router`: Main router containing all API routes

### Application Setup
```typescript
const app: Application = express();
app.use(express.json());
app.use(cors());
```
- Creates an Express application instance
- Configures JSON parsing middleware for handling JSON request bodies
- Enables CORS for cross-origin requests

### Routes
```typescript
app.get("/", (req, res) => {
	res.send("Welcome to Library Management System");
});

app.use("/api", router);
```
- Root route ("/") returns a welcome message
- All API routes are prefixed with "/api" and handled by the main router

### Error Handling
```typescript
app.use(globalErrorHandler);
app.use(notFound);
```
- Global error handler middleware catches and processes all errors
- NotFound middleware handles all undefined routes (404 errors)
- The order is important: notFound should be last as it's a catch-all for unmatched routes

### Export
```typescript
export default app;
```
- Exports the configured Express application for use in other files (likely used in the server startup file)

## Architecture Pattern
This file follows the middleware pattern common in Express.js applications, with a clear separation of:
1. Configuration and middleware setup
2. Route definitions
3. Error handling
4. Module export

The code is organized in a way that promotes maintainability and follows Express.js best practices.