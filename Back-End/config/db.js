const mongoose = require('mongoose')
require('dotenv').config({path:'.././Back-end/config/.env'})
const connectDB = async() =>{
    try{
        const connection = await mongoose.connect(process.env.DB);
        console.log('db is connected');
    } catch(err)
    {
        console.log('error in connection');
    }
}

module.exports = connectDB;