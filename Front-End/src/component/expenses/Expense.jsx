import React from "react";
import './Expenses.css'
import ExpenseList from "./expense_list/ExpenseList";
const Expenses = (props) => {

    const {expenses = []} = props

    return(
        <div className="expenses">
            <ExpenseList expenses={expenses}/>
        </div>
    )
}

export default Expenses