const mongoose = require("mongoose");
const {Schema} = mongoose;  //destructuring
const productSchema = new Schema({
    productName : {
        type: String,
        required: true
    },
    
    price : {
        type: Number,
        required: true
    },   
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;