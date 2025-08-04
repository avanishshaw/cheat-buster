// index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.routes.js'; // When using ES modules, the file extension is often required

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS with specific options
app.use(cors({
  origin: [
    'http://127.0.0.1:3001',   // Original Live Server address
    'http://localhost:3001',    // Alternative localhost address
    'http://localhost:3000',    // Your backend address (for testing)
    'http://localhost:5173'     // Vite dev server address
  ],
  methods: ['GET', 'POST'],     // Allowed HTTP methods
  credentials: true             // Allow cookies if needed
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully."))
  .catch(err => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => {
  res.send('Cheat Buster API is running!');
});

// Use our user routes for any path starting with /api
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});