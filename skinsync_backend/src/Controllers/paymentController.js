const Payment = require("../Models/paymentModel");
const Order = require("../Models/orderModel");
const domain = "http://localhost:5000";

// Helper function to send error responses
const sendErrorResponse = (res, error) => {
  console.log(error);
  res.status(500).json({ msg: error.message });
};

// Create a payment
const createPayment = async (req, res) => {
  try {
    const { orderId, paymentMethod, amount, transactionId } = req.body;

    // Check if the order exists
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ msg: "Order not found" });
    }

    const payment = new Payment({
      orderId,
      paymentMethod,
      amount,
      transactionId,
      paymentStatus: 'Pending' // Set default status
    });

    await payment.save();

    res.status(201).json({
      msg: "Payment created successfully",
      payment,
      success: true,
    });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get payment details by ID
const getPayment = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(404).json({ msg: "Payment not found" });
    }

    res.status(200).json(payment);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get all payments for an order
const getPaymentsByOrder = async (req, res) => {
  try {
    const payments = await Payment.find({ orderId: req.params.orderId });

    res.status(200).json(payments);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Update payment status
const updatePaymentStatus = async (req, res) => {
  try {
    const { paymentStatus } = req.body;
    
    const payment = await Payment.findByIdAndUpdate(req.params.id, { paymentStatus }, { new: true });

    if (!payment) {
      return res.status(404).json({ msg: "Payment not found" });
    }

    res.status(200).json({
      msg: "Payment status updated successfully",
      payment,
      success: true,
    });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  createPayment,
  getPayment,
  getPaymentsByOrder,
  updatePaymentStatus
};
