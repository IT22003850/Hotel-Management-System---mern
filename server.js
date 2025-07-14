const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/dbConfig')
require('colors')


const PORT = process.env.PORT

connectDB()

const app = express()

app.get('/', (req,res) => {
    res.status(201).send('welcome to home')
})

app.listen(PORT, ()=>{
    console.log(`server is listning to port ${PORT}`.blue);
})