const express = require('express');
const BookController = require('../controllers/book');
const apiBook = express.Router();

apiBook.get('/book/:id', BookController.getBook);
apiBook.get('/book', BookController.getBooks);
apiBook.post('/book', BookController.saveBook);
apiBook.put('/book/:id', BookController.updateBook);
apiBook.delete('/book/:id', BookController.deleteBook);

module.exports = apiBook;
