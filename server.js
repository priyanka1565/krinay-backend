const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./src/routes/todoRoutes');
const connectDB = require('./src/config/db')
const cors = require("cors")
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/todos', todoRoutes);


// Connect to MongoDB
connectDB();


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
