const Account = require('../model/account');

const createAccount = async (req,res) => {
    console.log(`this is the body ${JSON.stringify(req.body.accountNumber)}`)
    const account = new Account(req.body);
    await account.save();
    res.status(201).json({
        success:true,
        data:account
    })
    console.log(req.body)
}

const getAllAccounts = async (req,res) => {
    const accounts = await Account.find({});
    res.status(200).json({
        success:true,
        data:accounts
    })
}

// const updateAccount = async (req,res) => {

// }

module.exports = {createAccount,getAllAccounts}