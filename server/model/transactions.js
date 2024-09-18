const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    accountNumber:{
        type:String,
        
    },
    amount:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    description: {
        type:String,
    },
    
},
{timestamps:true}
);

module.exports = mongoose.model('Transaction',TransactionSchema)