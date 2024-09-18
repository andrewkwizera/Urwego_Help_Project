const express = require('express')
const {withdraw,getAllTransactions, deposit} = require('../controllers/transactions')

const router = express.Router();

router.route('/transaction').get(getAllTransactions)
router.route('/deposit/:id').patch(deposit)
router.route('/withdraw/:id').patch(withdraw)
module.exports = router