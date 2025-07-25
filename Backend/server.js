const express = require('express');
const mongoose = require('mongoose')
const app = express();

const User = require('./model/user')

PORT = 3000;
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/user')
.then(()=>console.log("mongoDB connected✨"))
.catch((err)=>console.log(err))


app.get('/',(req,res)=>{
    res.send("Get route is working")
})

app.post('/create', async(req,res)=>{
    const user = new User(req.body);
    const success = await user.save();
    if(success)
        res.send('User created Successfully')
    else 
        res.send('User not Created')
})

app.put('/',(req,res)=>{
    res.json({message:'put route is working'})
})

app.delete('/',(req,res)=>{
    res.json({message:"delete route is working"})
})

app.listen(PORT,()=>{
    console.log(`Server running in http://localhost:${PORT}`)
})