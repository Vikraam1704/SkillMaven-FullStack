const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello from skill maven')
})

app.listen(8000,()=>{
    console.log(`Server running in http://localhost:${8000}`)
})