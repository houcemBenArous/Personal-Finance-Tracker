const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

router.use(verifyToken);
router.post('/', transactionController.createTransaction);
router.get('/', transactionController.getTransactions);

module.exports = router; 