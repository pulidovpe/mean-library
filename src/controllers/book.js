const Book = require('../models/Book');

async function getBooks(req,res) {
   try {
      const books = await Book.find();
      res.status(200).json(books);
   } catch(err) {
      console.log(`err: ${err.status} - name: ${err.name} - message: ${err.message}`);
      return res.status(404).json({ error: err.message });
   }
}

async function getBook(req,res) {
   try {
      const id = req.params.id;
      const book = await Book.findById(id);
      res.status(200).json(book);
   } catch(err) {
      console.log(`err: ${err.status} - name: ${err.name} - message: ${err.message}`);
      return res.status(404).json({ error: err.message });
   }
}

async function saveBook(req,res) {
   try {
      const { title,author,editorial,language,state } = req.body;
      const newBook = new Book({ title,author,editorial,language,state });
      const saved = await newBook.save();
      res.status(200).json(saved);
   } catch(err) {
      console.log(`err: ${err.status} - name: ${err.name} - message: ${err.message}`);
      if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
      }
      return res.status(404).json({ error: err.message });
   }
}

async function updateBook(req,res) {
   try {
      const id = req.params.id;
      const { title,author,editorial,language,state } = req.body;
      const updBook = { title,author,editorial,language,state };
      const updated = await Book.findByIdAndUpdate(id, updBook);
      res.status(200).json(updated);
   } catch(err) {
      console.log(`err: ${err.status} - name: ${err.name} - message: ${err.message}`);
      if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
      }
      return res.status(404).json({ error: err.message });
   }
}

async function deleteBook(req,res) {
   try {
      const id = req.params.id;
      await Book.findByIdAndRemove(id);
      res.sendStatus(200).send({ status: 'Book deleted' });
   } catch(err) {
      console.log(`err: ${err.status} - name: ${err.name} - message: ${err.message}`);
      if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
      }
      return res.status(404).json({ error: err.message });
   }
}

module.exports = {
   getBooks,
   getBook,
   saveBook,
   updateBook,
   deleteBook
}
