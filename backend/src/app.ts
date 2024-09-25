import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import rateLimit from "express-rate-limit";
import userController from "./controllers/userController.js";
import connectToMongoDB from "./config/database.js";
import {errorHandler} from "./utils/error/errorHandler.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectToMongoDB();

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


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});