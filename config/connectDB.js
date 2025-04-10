const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.MONGO_URI;
const connectToDB = () => {
     mongoose.connect(url);
    console.log('connected to db');
} 

module.exports = connectToDB;