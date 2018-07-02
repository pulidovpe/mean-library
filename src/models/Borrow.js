const mongoose = require('mongoose');
const { Schema } = mongoose;

const Book = require('./Book');
const book = mongoose.model('Book');
const User = require('./User');
const user = mongoose.model('User');

const state_opt = ["current","expired"];

const borrow_schema = new Schema({
   user_id: {
    type: Schema.ObjectId,
    ref: "user",
    default: null
  },
  book_id: {
    type: Schema.ObjectId,
    ref: "book",
    default: null
  },
  date_borrowed: {
    type: Date,
    default: Date.now
  },
  date_due: {
    type: Date,
    default: null
  },
  state: {
    type: String,
    default: 'current',
    enum:{
      values: state_opt,
      message:'Wrong choice'
    }
  }
});

const Borrow = mongoose.model("Borrow",borrow_schema);

module.exports = Borrow;
