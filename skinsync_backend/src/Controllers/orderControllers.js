const Order = require('../Models/orderModel');
const OrderItem = require('../Models/orderitem');

exports.placeOrder = async (req, res) => {
  try {
    const { userId, orderItems, shippingAddress, city, postalCode, country } = req.body;

    // Create OrderItem documents
    const orderItemDocs = await Promise.all(orderItems.map(async item => {
      const orderItem = new OrderItem({
        product: item.productId,
        quantity: item.quantity,
        price: item.price
      });
      return await orderItem.save();
    }));

    // Calculate total amount
    const totalAmount = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Create Order document
    const order = new Order({
      user: userId,
      orderItems: orderItemDocs.map(item => item._id),
      shippingAddress,
      city,
      postalCode,
      country,
      totalAmount
    });

    // Save the order
    await order.save();

    // Send response
    res.status(201).json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
