// const mongoose = require('mongoose')

// require('dotenv').config()

// module.exports = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL).then(() => {
      
//     }).catch
//   } catch (error) {
//     console.log(error)
//   }
// }


const { default: mongoose } = require("mongoose");
require("dotenv").config();

const connect = async () => {
	try {
		return mongoose.connect(process.env.DB);
	} catch (error) {
		return console.log(error);
	}
};

module.exports = { connect };