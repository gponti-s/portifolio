import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import userController from "./controllers/userController.js";
import initializeDatabase from "./config/database.js";
import {errorHandler} from "./utils/error/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
initializeDatabase();

// Middlewares
app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later."
}));

// Routes
app.use("/api/user", userController);

app.listen(PORT, () => {
  console.log(`\u001b[32m\u2714 Server running at port ${PORT}\u001b[0m`);
}).on('error', (err) => {
  const error = err as NodeJS.ErrnoException;
  if (error.code === 'EADDRINUSE') {
      console.error(`\u001b[31m\u274c Port ${PORT} is already in use. Please choose a different port.\u001b[0m`);
      process.exit(1); 
  } else {
      console.error('\u001b[31m\u274c Error starting the server:\u001b[0m', err);
      process.exit(1);
  }
});