const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Import Routes
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

// Initialize App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route for Browser
app.get('/', (req, res) => {
  res.send('🚀 FutureConnect Backend is Running!');
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 5050;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });
