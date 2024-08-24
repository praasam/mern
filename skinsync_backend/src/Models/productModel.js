const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  category:{
    type:Schema.Types.ObjectId,
    ref:'categories',
    required:true
},
name:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
description:{
    type:String,
    required:true
},
productImage:{
    type:String,
    required:true
},
brand:{
   type:Schema.Types.ObjectId,
    ref:'brands',
    required:true
},
// rating:{
//     type:Number,
//     required:true
// },
// numReviews:{
//     type:Number,
//     required:true
// },
// countInStock:{
//     type:Number,
//     required:true
// }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
