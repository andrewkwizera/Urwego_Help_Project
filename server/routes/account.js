const express = require('express')
const {createAccount,getAllAccounts} = require('../controllers/account')

const router = express.Router();

router.route('/account').post(createAccount).get(getAllAccounts)

module.exports = router