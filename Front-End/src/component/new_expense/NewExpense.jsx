import React from 'react'
import './NewExpense.css'
import { NewExpenseForm } from './NewExpenseForm'
import {nanoid} from "nanoid";

export const NewExpense = (props) => {
    const {submit}=props
    const onNewAddExpense = (expense) => {
        const modified_expense ={
            ...expense,
            id : nanoid(),
        }
        submit(modified_expense);
    } 
    return (
        <div className='new-expense'>
            <NewExpenseForm
            save={onNewAddExpense}
            />
        </div>
    )
}
