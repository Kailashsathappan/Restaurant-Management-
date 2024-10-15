const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    // Import Routes
    const productRoutes = require('./routes/productroutes');
    app.use('/api/products', productRoutes);
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });