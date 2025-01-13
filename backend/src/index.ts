import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userController from './controllers/userController.js';
import cors from 'cors';
import initializeDatabase from './config/database.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://portifolio-rose-nu.vercel.app/']
    : ['http://localhost:3000'],
  credentials: true
};

app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI as string)
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

initializeDatabase();

// Add security headers
app.use(helmet());

// enable JSON body parse
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/', (req, res) =>{
  res.send("The server is working");
})

app.use('/api/user', userController);


export default app;