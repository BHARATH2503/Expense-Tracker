const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    title:String,
    amount:Number,
    desc:String,
    date:Date
})

module.exports = mongoose.model('Expense',ExpenseSchema);