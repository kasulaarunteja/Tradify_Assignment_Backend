const express = require('express')
const {connect} = require('./config/db')

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

app.get('/', (req,res) => {
  return res.send('hello world')
})


app.use(express.json())
app.post('/register', register)
app.post('/login', login)


const PORT = process.env.PORT || 8080

// app.listen(PORT, async () => {
//   try {
//     await connect()
//     console.log(`listing ${PORT}`)
//   } catch (err) {
//     console.log('err', err)
//   }
  
// })

app.listen(PORT, async () => {
	try {
		await connect()
		console.log("Connected to DB");
	} catch (error) {
		console.log(error);
	}
});