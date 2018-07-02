const Book = require('../models/Book');

async function getBooks(req,res) {
   try {
      const books = await Book.find();
      res.json(books);
   } catch(err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}

async function getBook(req,res) {
   try {
      const id = req.params.id;
      const book = await Book.findById(id);
      console.log(JSON.stringify(book));
      res.sendStatus(200).send({
         data: book,
      });
   } catch(err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}

async function saveBook(req,res) {
   try {
      const { title,author,editorial,language,state } = req.body;
      const newBook = new Book({ title,author,editorial,language,state });
      await newBook.save();
      console.log(JSON.stringify(newBook));
      res.sendStatus(200).send({ status: 'Book saved' });
   } catch(err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}

async function updateBook(req,res) {
   try {
      const id = req.params.id;
      const { title,author,editorial,language,state } = req.body;
      const updBook = { title,author,editorial,language,state };
      await Book.findByIdAndUpdate(id, updBook);
      console.log(JSON.stringify(updBook));
      res.sendStatus(200).send({ status: 'Book updated' });
   } catch(err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}

async function deleteBook(req,res) {
   try {
      const id = req.params.id;
      await Book.findByIdAndRemove(id);
      res.sendStatus(200).send({ status: 'Book deleted' });
   } catch(err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}

module.exports = {
   getBooks,
   getBook,
   saveBook,
   updateBook,
   deleteBook
}
