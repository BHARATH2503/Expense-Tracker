const express = require('express')
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');
connectDB();
const {getAllExpenses,createExpense,deleteExpense,updateExpense,getSomeExpense} = require('./controller/expense')


const app = new express()
app.use(bodyParser.json());
app.use(cors(({origin:'*'})));

app.get('   h',(req,res) =>{
    res.status(200).send("Health Check");
})

app.get('https://expense-tracker-9qko.onrender.com/api/v2/expenses',getAllExpenses);
app.get('https://expense-tracker-9qko.onrender.com/api/v2/expenses/:id',getSomeExpense);
app.post('https://expense-tracker-9qko.onrender.com/api/v2/expenses/create',createExpense);
app.delete('https://expense-tracker-9qko.onrender.com/api/v2/expenses/:id',deleteExpense);
app.put('https://expense-tracker-9qko.onrender.com/api/v2/expenses/update/:id',updateExpense)

app.listen(3000, ()=>{
    console.log("Server running")
})