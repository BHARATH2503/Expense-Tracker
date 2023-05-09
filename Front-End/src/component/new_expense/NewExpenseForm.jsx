import React, { useState } from 'react'
import './NewExpenseForm.css';

export const NewExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const {save} = props;

    const onChangeTitle = (e) =>{
        setTitle(e.target.value)
    }
    const onChangeAmount = (e) =>{
        setAmount(e.target.value)
    }
    const onChangeDate = (e) =>{
        setDate(e.target.value)
    }

    const omSubmitHandler = (e) =>{
        e.preventDefault();
    const new_expense = {
        title, amount, date:new Date(date),
    }
    save(new_expense);
    console.log(new_expense);
    }

    return (
        <div>
            <form onSubmit={omSubmitHandler}>
                <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="Title">Title</label>
                    <input type="text" name='title' id='Title' onChange={onChangeTitle}  value={title}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="Amount">Amount</label>
                    <input type="number" min={0} name='Amount' id='Amount' onChange={onChangeAmount} value={amount} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="Date">Date</label>
                    <input type="date" name='date' id='Date' onChange={onChangeDate} value={date} />
                </div>
                </div>

                <div className='new-expense__actions'>
                    <button type='reset'>Cancel</button>
                    <button type='submit'>Add Expenses</button>
                </div>
            </form>
        </div>
    )
}
