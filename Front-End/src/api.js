export const getAllExpense = (setExpenses) => {
    fetch('https://expense-tracker-9mqc.onrender.com/api/v2/expenses')
        .then((response) => response.json())
            .then((expense_data) => setExpenses(expense_data.data));
}

export const addExpense = (postData = {}, callback) => {
    fetch('https://expense-tracker-9mqc.onrender.com/api/v2/expenses/create',
    {
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(postData),
    })
    .then((response) => response.json())

    .then((data)=> {callback && callback();})
}