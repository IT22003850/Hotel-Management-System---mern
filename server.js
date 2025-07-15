const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/dbConfig')
const roomRoutes = require('./routes/roomRoutes')
require('colors')


const PORT = process.env.PORT

//connect to mongoDB
connectDB()

const app = express()

//middleware
app.use(express.json())

app.use('/api/rooms', roomRoutes)

app.listen(PORT, ()=>{
    console.log(`server is listning to port ${PORT}`.blue);
})