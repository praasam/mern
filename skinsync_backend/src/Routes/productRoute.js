const express = require('express');
const router = express.Router();

const authMiddleware = require('../Middleware/authMiddleware');
const authorizeRole = require('../Middleware/authorizationMiddleware');
const { productImage } = require('../Middleware/uploadMiddleware');
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getProducts,
  getProductsByCategory
} = require('../Controllers/productControllers');

/**
 * @description Create a new product
 * @route POST /api/products/create
 * @access Private/Admin
 */
router.post('/create', authMiddleware, authorizeRole('admin'), productImage.single('productImage'), createProduct);

/**
 * @description Update an existing product
 * @route PUT /api/products/update/:id
 * @access Private/Admin
 */
router.put('/update/:id', authMiddleware, authorizeRole('admin'), productImage.single('productImage'), updateProduct);

/**
 * @description Delete a product
 * @route DELETE /api/products/delete/:id
 * @access Private/Admin
 */
router.delete('/delete/:id', authMiddleware, authorizeRole('admin'), deleteProduct);

/**
 * @description Get a single product by ID
 * @route GET /api/products/get/:id
 * @access Public
 */
router.get('/get/:id', getProduct);

/**
 * @description Get all products
 * @route GET /api/products/all
 * @access Public
 */
router.get('/all', getProducts);

/**
 * @description Get products by category
 * @route GET /api/products/category/:categoryId
 * @access Public
 */
router.get('/category/:categoryId', getProductsByCategory);

module.exports = router;
