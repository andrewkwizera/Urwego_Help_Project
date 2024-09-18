const Transaction = require('../model/transactions');
const Account = require('../model/account')

// const createTransaction = async (req,res) => {
//     console.log(`this is the body ${JSON.stringify(req.body)}`)
//     const transaction = new Transaction(req.body);
//     await transaction.save();
//     res.status(201).json({
//         success:true,
//         data:transaction
//     })
//     //console.log(req.body)
// }

const deposit = async (req, res) => {
    const act = await Account.findById(req.params.id);
    // console.log(`this is the balance ${act.balance}`)
    const amount = Number(req.body.amount) + Number(act.balance);
    const account = await Account.findByIdAndUpdate(req.params.id,{balance:amount},{
        new: true
    })

    res.status(200).json({
        success:true,
        data:account
    })

    const transaction = new Transaction(req.body);
    await transaction.save();
}

const getAllTransactions = async (req,res) => {
    const transactions = await Transaction.find({});
    res.status(200).json({
        success:true,
        data:transactions
    })
}

const withdraw = async (req,res) => {

    const act = await Account.findById(req.params.id);
    // console.log(`this is the balance ${act.balance}`)
    const amount =  Number(act.balance) - Number(req.body.amount);
    const account = await Account.findByIdAndUpdate(req.params.id,{balance:amount},{
        new: true
    })

    res.status(200).json({
        success:true,
        data:account
    })

    const transaction = new Transaction(req.body);
    await transaction.save();
    
}

module.exports = {getAllTransactions,deposit,withdraw}