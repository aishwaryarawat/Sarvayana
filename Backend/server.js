const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const app = express()

dotenv.config()
connectDB()

app.use(express.json())

app.listen(process.env.PORT, ()=>{
    console.log(`Server started listening on port: ${process.env.PORT}`)
})