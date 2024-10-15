// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios'); // Import axios for making HTTP requests
const authRoutes = require('./routes/auth'); // Import authentication routes
const productRoutes = require('./routes/productRoutes'); // Import product routes

const PORT = 5000; // Define the port

// Middleware
const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB successfully'); // Log on successful connection
}).catch(err => {
    console.error('MongoDB connection error:', err); // Log connection errors
});

// Import Routes
app.use('/api/products', productRoutes); // Product routes
app.use('/auth', authRoutes); // Authentication routes

// Example endpoint to connect to another server
app.get('/api/another-server/data', async (req, res) => {
    try {
        const response = await axios.get('http://127.0.0.1:5001/api/data'); // Connect to another server
        res.json(response.data); // Forward the response data
    } catch (error) {
        console.error('Error fetching data from another server:', error);
        res.status(500).json({ error: 'Failed to fetch data from another server' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log server status
});
