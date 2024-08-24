const Customer = require("../Models/customerModel");

const createCustomer = async (req, res) => {
  const { name, email, password, address, phone, orders } = req.body;

  const newCustomer = new Customer({
    name: name,
    email: email,
    password: password,
    address: address,
    phone: phone,
    orders: orders
  });

  try {
    const response = await newCustomer.save();
    if (response) {
      res.status(201).json({ message: "Customer added successfully.", response });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error.", error });
  }
};

module.exports = createCustomer;
