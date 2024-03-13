const express = require('express');

const router = express.Router();

const expenseController = require('../controllers/Expense');

router.post('/add-expense', expenseController.addExpense);

router.get('/get-expenses', expenseController.getExpense);

router.delete('/delete-expense/:id', expenseController.deleteExpense);



module.exports = router;