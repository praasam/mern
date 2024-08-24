// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const { placeOrder } = require('../Controller/OrderController');

router.post('/checkout', placeOrder);

module.exports = router;
    