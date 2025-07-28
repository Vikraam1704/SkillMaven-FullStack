const express = require('express');
const app = express();
PORT = 3000;
app.use(express.json())
const connectDB = require('./config/db')

const userRoutes = require('./routes/userRoutes')

connectDB();

app.use('/',userRoutes)
app.get('/get',(req,res)=>{
    res.send("Hello")
})
app.listen(PORT,()=>{
    console.log(`Server running in http://localhost:${PORT}`)
})