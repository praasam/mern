// const math = require("./math.js");
// const file = require("./file.js");

// // const result = math.add(1,2);
// // console.log(result);

// // const sum = math.add(12,2);
// // console.log(sum);

// // const minus = math.sub(10,2);
// // console.log(minus);

// // const multiply = math.mul(6,2);
// // console.log(multiply);

// // const division = math.divide(20, 5);
// // console.log(division);

// // const readFile = file.readFile;

// const http = require('http');
// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.write("Hello world");
//     res.end();
// }
// )
// server.listen(3000, ()=>{
//     console.log("Server is running on port 3000")
// })

// const express = require('express');
// const port = 3000;
// const app = express();

// app.use(express.json());

// app.get('/' , (req, res) =>{
//     res.send("Hello World");
// });



// const users = [
//     {
//         id: 1,
//         name: "Aasma",
//     },
//     {
//         id: 2,
//         name: "Deeshri",
//     },
// ];
// app.get("/users", (req, res)=>{
//     res.json(users);
// });

// app.get("/users/:id", (req, res) => {
//     const user_id = req.params.id;
//     console.log(user_id);
//     const user = users.find((user) => user.id === parseInt(user_id));
//     if (!user){
//         res.status(404).send("User not found");
//     }
//     res.send(user);
// })

 

// app.post("/post-user", (req, res) => {
//     // res.send(users);
//     // const data = req.body;
//     const name = req.body.name;
//     res.send(name);
// });

// app.listen(port, ()=>{
//     console.log(`Server is running on ${port}`)
// }) 

const express = require("express");
const app = express();
require('dotenv').config();
const connectDb = require("./src/Config/db");
const userRoute = require("./src/Routes/userRoute")
const productRoute = require("./src/Routes/productRoute")
const authRoute = require("./src/Routes/authRoute")

app.use(express.json());
const port = process.env.port;

connectDb();

app.use("/user", userRoute)
app.use("/product", productRoute)
app.use("/api/auth", authRoute)


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});