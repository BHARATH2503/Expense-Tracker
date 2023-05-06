const Expense = require('../Modal/expense');

//get
exports.getAllExpenses = async(req,res) => {
    try{
        const expenses = await Expense.find();
        return res.status(200).json({
            data:expenses,
            length : expenses.length
        })
    }
    catch(err)
    {
        res.status(404).json({
            msg:'Server internal error'
        })
    }
}

//get by id
exports.getSomeExpense = async(req,res) => {
    try{
        const id = req.params.id;
        const expenses = await Expense.findById(id);
        return res.status(200).json({
            data:expenses,
            length : expenses.length
        })
    }
    catch(err)
    {
        res.status(404).json({
            msg:'Server internal error'
        })
    }
}



//create
exports.createExpense =async(req,res) => {
    try{
        const newExpense = req.body;
        // console.log(req.body)
        await Expense.create(newExpense);
        res.status(200).json({
            msg:'created'
        })
    } catch(err)
    {
        res.status(500).json({
            msg:'Server internal error'
        })
    }

}

// delete

exports.deleteExpense = async(req,res) => {
    try{
        const id = req.params.id;
        await Expense.findByIdAndDelete(id);
        res.status(200).json({
            msg:'Deleted'
        })
    }
    catch(err)
    {
        res.status(500).json({
            msg:'Server internal error'
        })
    }
}

//Update
exports.updateExpense = async(req,res) => {
    try{
        const id = req.params.id;
        await Expense.findByIdAndUpdate(id,{$set:req.body})
        res.status(200).json({
            msg:'Updated'
        })
    }
    catch(err)
    {
        res.status(500).json({
            msg:'Server internal error'
        })
    }
}