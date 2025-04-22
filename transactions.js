const express = require('express');
const router = express.Router();
const { createTransaction, getAllTransactions } = require('../models/transaction');

// Get all transactions
router.get('/', (req, res) => {
    getAllTransactions((err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error retrieving transactions' });
        }
        res.json(result);
    });
});

// Create a new transaction
router.post('/', (req, res) => {
    const { description, amount, date, category } = req.body;
    const newTransaction = { description, amount, date, category };

    createTransaction(newTransaction, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating transaction' });
        }
        res.status(201).json({ message: 'Transaction created successfully', transactionId: result.insertId });
    });
});

module.exports = router;
