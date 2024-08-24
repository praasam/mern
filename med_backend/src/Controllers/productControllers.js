const Product = require("../Models/productModel")

const createProduct = async(req, res) =>{


    const {productName, price} = req.body;
    

    const addProduct = new Product({
        productName : productName,
        price : price,
    });

    try{
       const response =  await addProduct.save();
       if(response){
        res.status(201).json({message:"Product added successfully.",response})
       }
    }
    catch(error){
        res.status(500).json({message: "Internal server error.", error})
    }
};

module.exports = createProduct;