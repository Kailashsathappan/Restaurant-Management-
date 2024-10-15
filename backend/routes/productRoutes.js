const express = require('express');
const router = express.Router();

// Sample GET route for products
router.get('/', async (req, res) => {
    // Logic to get products from database
    // Example response
    res.json([{ id: 1, name: 'Product 1', price: 100 }, { id: 2, name: 'Product 2', price: 200 }]);
});

// Other product routes (add, update, delete) can be added here

module.exports = router;
