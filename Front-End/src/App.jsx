import { useEffect, useState } from 'react';
import './App.css'
import Expenses from "./component/expenses/expenses";
import { NewExpense } from './component/new_expense/NewExpense';
import { getAllExpense,addExpense } from './api';

function App() {

  const [expenses, setExpenses] = useState([]);

  useEffect(()=>{

   getAllExpense(setExpenses)
  },[])

  const onAddData = (expense) =>{
    console.log("app",expense);
    addExpense(expense, ()=>{
      setExpenses((previous_expenses)=>{
        return [...previous_expenses,expense]
    })
    })
    
  }
console.log(expenses)
  return (
    <div className="App">
      <h1 className='title'>Expense Tracker</h1>
      <NewExpense submit={onAddData}/>
      <Expenses expenses={expenses}/>
    </div>
  )
}

export default App
