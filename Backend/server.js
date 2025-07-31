const express = require('express');
const app = express();
const connectDB = require('./config/db')
const cors = require('cors')
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const todoRouter = require('./routes/todoRoutes');
dotenv.config();
app.use(cors());
PORT = process.env.PORT;
connectDB();
app.use(express.json())
app.use('/',userRoutes)

app.use('/todos',todoRouter)
app.get('/get',(req,res)=>{
    res.send("Hello")
})
app.listen(PORT,()=>{
    console.log(`Server running in http://localhost:${PORT}`)
})