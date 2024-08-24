const mongoose = require('mongoose');
const {Schema} =  mongoose;

const CartitemSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AuthUser',  
        required: true
    },

    OrderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',  
        required: true
    },
   Productquantity:{
        type : Number,
        ref:'Product',
        require:true,
    },


    price:{
        type : Number,
        ref:'Product',
        require:true,
    },

    Quantity:{
        type : Number,
        require:true,
    },


});

const Cartitem = mongoose.model("Cartitem",CartitemSchema);
module.exports = Cartitem;
