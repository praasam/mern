const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  orders: [{
    type: String,
    ref: 'Order'
  }]
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
