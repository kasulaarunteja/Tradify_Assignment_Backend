
const mongoose = require('mongoose');

require("detenv").config()

module.exports =() => {
    mongoose.connect(process.env.MONGODB_URL)
}