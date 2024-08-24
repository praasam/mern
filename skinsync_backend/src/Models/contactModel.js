const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    match: [/^\d{10}$/, "Please enter a valid phone number"],
  },
  comment: {
    type: String,
    required: [true, "Comment is required"],
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
