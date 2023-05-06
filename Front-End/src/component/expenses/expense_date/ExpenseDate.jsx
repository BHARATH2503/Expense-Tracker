import React from "react";
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const {date} = props;
    let dataObject= new Date(date) 
    const month = dataObject.toLocaleString('en-US',{month:'long'});
    const day = dataObject.toLocaleString('en-US',{day:'numeric'});

    const year = dataObject.getFullYear();
    
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}

export default ExpenseDate;