const express = require('express');
const BorrowController = require('../controllers/borrow');
const apiBorrow = express.Router();

apiBorrow.get('/borrow/:id', BorrowController.getBorrow);
apiBorrow.get('/borrow', BorrowController.getBorrows);
apiBorrow.post('/borrow/', BorrowController.saveBorrow);
apiBorrow.put('/borrow/:id/:book_id', BorrowController.updateBorrow);
apiBorrow.delete('/borrow/:id', BorrowController.deleteBorrow);

module.exports = apiBorrow;
