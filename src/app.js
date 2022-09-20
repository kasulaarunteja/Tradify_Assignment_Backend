const express = require('express')
const connect = require('./config/db')

const app = express()
// const router = express.Router();
const cors = require('cors')
require('dotenv').config()

const { register, login } = require('./controllers/auth.controller')

app.use(
  cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  }),
)
app.use(express.json())
require('dotenv').config()
app.post('/register', register)
app.post('/login', login)


const PORT = process.env.PORT || 8080

app.listen(PORT, async () => {
  try {
    await connect()
  } catch (error) {
    console.log('err')
  }
  console.log(`listing ${PORT}`)
})
