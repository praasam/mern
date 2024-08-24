const express = require('express');
const router = express.Router();
const cartController = require('../Controllers/cartController');

// Route to add an item to the cart
router.post('/add', cartController.addToCart);

// Route to remove an item from the cart
router.delete('/remove/:userId/:productId', cartController.removeFromCart);

// Route to get the cart details
router.get('/get/:userId', cartController.getCart);

// Route to empty the cart
router.delete('/empty/:userId', cartController.emptyCart);

router.get('/carts', cartController.getAllCarts);

// Route to update item quantity
router.put('/update', cartController.updateCartItemQuantity);

module.exports = router;
