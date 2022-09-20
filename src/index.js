



const express = require("express");
const  connect  = require("./config/db");


const app = express()
const cors = require('cors')
require('dotenv').config()


app.use(
    cors({
      origin: '*',
      credentials: true,
      methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    }),
  )
app.use(express.json())




const PORT  = process.env.PORT || 8080;

app.listen(PORT, async () => {
    try{
        await connect()
    }catch(err){
        console.log("err")
    }
    console.log(`listing ${PORT}`)
})