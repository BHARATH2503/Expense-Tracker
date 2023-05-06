import React from "react";
import './ExpenseItem.css'
import ExpenseDate from "../expense_date/ExpenseDate";
import { useState } from 'react';

const ExpenseItem = (props) => {
    // console.log('ExpenItem',props);
    const {title,amount,date} = props;

    // let [modify_title,setModifyTitle] = useState(title);
    // const updateName=()=>{
    //     setModifyTitle("Updated");
    //     // console.log(modify_title)
    //   }

    return (
        <li>
        <div className="expense-item">
           <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${amount}
                </div>
            </div>

            {/* <button onClick={updateName}>Update</button>*/}
        </div>
        </li>
    );
};

export default ExpenseItem;