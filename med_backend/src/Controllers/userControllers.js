const User = require("../Models/userModel")
// controllers to create users
const createUser = async(req, res) =>{
    // const data = req.body;
    // const name = data.name;
    // const age = data.age;
    // const role = data.role;

    const {name, age, role} = req.body;
    

    const addUser = new User({
        name : name,
        age : age,
        role : role
    });

    try{
       const response =  await addUser.save();
       if(response){
        res.status(201).json({message:"User created successfully.",response})
       }
    }
    catch(error){
        res.status(500).json({message: "Internal server error.", error})
    }
};

module.exports = createUser;