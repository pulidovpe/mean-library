const Borrow = require('../models/Borrow');
const Book = require('../models/Book');

async function getBorrows(req,res) {
   try {
      await Borrow.find({state: 'current'}).populate([
         {path: 'user_id', model: 'User'},
         {path: 'book_id', model: 'Book'}
      ]).exec((err, brws) => {
         if(err || brws === undefined) res.status(404).send({ error: 'Something failed. Not found!' });
         else res.json(brws);
      });
   } catch(err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}

async function getBorrow(req,res) {
   try {
      const _id = req.params.id;
      await Borrow.findOne({_id}).populate([
         {path: 'user_id', model: 'User'},
         {path: 'book_id', model: 'Book'}
      ]).exec((err, brws) => {
        if(err || brws === undefined) {
          res.sendStatus(err.status || 404);
          console.log(`err: ${err.status} - message: ${err.message}`);
        } else res.json(brws);
      });
   } catch(err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}
// borrow a book
async function saveBorrow(req,res) {
   try {
      const { user_id, book_id } = req.body;
      const newBorrow = new Borrow({ user_id, book_id });
      await newBorrow.save()
      .then(async () => {
         await Book.findByIdAndUpdate(book_id, {state: 'inactive'})
         .exec((err) => {
            if(err) res.status(404).send({ error: 'Something failed. Not found!' });
            else {
               console.log(JSON.stringify(newBorrow));
               res.status(200).send({ status: 'Borrow created' });
            }
         });
      });
   } catch(err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}
// return a book
async function updateBorrow(req,res) {
   try {
      const { id, book_id } = req.params;
      const today = new Date();
      const updBorrow = { date_due: today, state: 'expired' };
      await Borrow.findByIdAndUpdate(id, updBorrow)
      .then(async () => {
         await Book.findByIdAndUpdate(book_id, {state: 'active'})
         .exec((err, book) => {
            if(err || book === undefined) res.status(404).send({ error: 'Something failed. Not updated!' });
            else {
               console.log(JSON.stringify(updBorrow));
               res.status(200).send({ status: 'Borrow updated' });
            }
         });
      });
   } catch(err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}

async function deleteBorrow(req,res) {
   try {
      const id = req.params.id;
      await Borrow.findByIdAndRemove(id);
      res.status(200).send({ status: 'Borrow deleted' });
   } catch (err) {
      res.sendStatus(err.status || 404);
      console.log(`err: ${err.status} - message: ${err.message}`);
   }
}

module.exports = {
   getBorrow,
   getBorrows,
   saveBorrow,
   updateBorrow,
   deleteBorrow
}
