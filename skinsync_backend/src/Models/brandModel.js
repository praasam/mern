const mongoose = require("mongoose");
const { Schema } = mongoose;

const brandSchema = new Schema({
  name: {
    type: String,
    required: [true, "Brand name is required"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Brand description is required"],
  },
  // logoUrl: {
  //   type: String,
  //   required: true
  // }
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
