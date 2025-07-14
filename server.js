const express = require('express')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT



const app = express()

app.get('/', (req,res) => {
    res.status(201).send('welcome to home')
})

app.listen(PORT, ()=>{
    console.log(`server is listning to port ${PORT}`);
})