import { useEffect, useState } from 'react';
import './App.css'
import Expenses from "./component/expenses/expenses";
import { NewExpense } from './component/new_expense/NewExpense';
import { getAllExpense,addExpense } from './api';


// const DUMMY_DATA = [
//   {
//     id: 'e1',
//     title: 'Groceries',
//     amount: 94.12,
//     date: new Date(2021, 7, 14),
//   },
//   {
//     id: 'e2', 
//     title: 'New Mobile',
//     amount: 799.49,
//     date: new Date(2020, 2, 12)
//   },
//   {
//     id: 'e3',
//     title: 'Car Repair',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New work desk',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];


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
      <NewExpense submit={onAddData}/>
      <Expenses expenses={expenses}/>
    </div>
  )
}

export default App
