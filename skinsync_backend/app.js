const express = require("express");
const app = express();
const cors = require('cors');
require('dotenv').config();
const connectDb = require("./src/Config/db");
const productRoute = require("./src/Routes/productRoute")
const createCustomer = require("./src/Routes/customerRoute")
const createBrand = require("./src/Routes/brandRoute")
const authRoute = require("./src/Routes/authRoute")
const profileRoute = require("./src/Routes/profileRoute")
const categoryRoute = require("./src/Routes/categoryRoute")
const contactRoute = require("./src/Routes/contactRoute");
const cartRoute = require("./src/Routes/cartRoute")

app.use(express.json());
const port = process.env.port;
app.use(cors());
connectDb();


app.use("/api/products", productRoute);  // Updated base path
app.use("/customer", createCustomer)
app.use("/brand", createBrand)
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use('/api/profile', profileRoute);
app.use('/auth', authRoute);
app.use("/category", categoryRoute);
app.use("/contact", contactRoute);
app.use("/cart", cartRoute );


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});