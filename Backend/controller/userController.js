const User = require('../model/user')

const getUser = (req,res)=>{
    res.send("Get route is working")
}

const createUser = async(req,res)=>{
    const user = new User(req.body);
    const success = await user.save();
    if(success)
        res.send('User created Successfully')
    else 
        res.send('User not Created')
}

const updateUser = (req,res)=>{
    res.json({message:'put route is working'})
}

const deleteUser = (req,res)=>{
    res.json({message:"delete route is working"})
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}