const express = require('express');
const app = express();
PORT = 3000;
app.use(express.json())
const connectDB = require('./config/db')
const cors = require('cors')

const userRoutes = require('./routes/userRoutes');
const todoRouter = require('./routes/todoRoutes');
app.use(cors());
connectDB();

app.use('/',userRoutes)

app.use('/todos',todoRouter)
app.get('/get',(req,res)=>{
    res.send("Hello")
})
app.listen(PORT,()=>{
    console.log(`Server running in http://localhost:${PORT}`)
})