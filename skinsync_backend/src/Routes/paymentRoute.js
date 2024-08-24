const express = require('express');
const router = express.Router();

const authMiddleware = require('../Middleware/authMiddleware');
const authorizeRole = require('../Middleware/authorizationMiddleware');
const {
  createPayment,
  getPayment,
  getPaymentsByOrder,
  updatePaymentStatus
} = require('../Controllers/paymentController');

/**
 * @description Create a new payment
 * @route POST /api/payments
 * @access Private
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing the created payment
 */
router.post('/', authMiddleware, createPayment);

/**
 * @description Get a single payment by ID
 * @route GET /api/payments/:id
 * @access Private
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing the payment data
 */
router.get('/:id', authMiddleware, getPayment);

/**
 * @description Get all payments for an order
 * @route GET /api/payments/order/:orderId
 * @access Private
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing an array of payments
 */
router.get('/order/:orderId', authMiddleware, getPaymentsByOrder);

/**
 * @description Update payment status
 * @route PUT /api/payments/:id
 * @access Private/Admin
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing the updated payment
 */
router.put('/:id', authMiddleware, authorizeRole('admin'), updatePaymentStatus);

module.exports = router;
