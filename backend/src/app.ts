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
const port = process.env.PORT || 5001;

// Middleware
app.use(express.json());

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://portifolio-rose-nu.vercel.app'
    : 'http://localhost:3000',
  credentials: true
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

app.options('*', cors(corsOptions)); // Enable pre-flight for all routes

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

initializeDatabase();

// Routes
app.get('/', (req, res) => {
  res.send('API is working!');
});

app.use('/api/user', userController);

// Add error handling
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something broke!',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
