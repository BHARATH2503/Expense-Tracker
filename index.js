const express = require('express')
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');
connectDB();
const {getAllExpenses,createExpense,deleteExpense,updateExpense,getSomeExpense} = require('./controller/expense')


const app = new express()
app.use(bodyParser.json());
app.use(cors(({origin:'*'})));

app.get('/api/v2/health',(req,res) =>{
    res.status(200).send("Health Check");
})

app.get('/api/v2/expenses',getAllExpenses);
app.get('/api/v2/expenses/:id',getSomeExpense);
app.post('/api/v2/expenses/create',createExpense);
app.delete('/api/v2/expenses/:id',deleteExpense);
app.put('/api/v2/expenses/update/:id',updateExpense)

app.listen(3000, ()=>{
    console.log("Server running")
})