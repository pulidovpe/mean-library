const mongoose = require('mongoose');
const { Schema } = mongoose;

const state_opt = ["active","inactive"];
const lang_opt = ["english","spanish","french","italian"];

const book_schema = new Schema({
   title: {
    type: String,
    required: true,
    maxlength: [50,"Title too big"],
    minlength: [3,"Title too small"]
  },
  author: {
    type: String,
    required: true,
    maxlength: [30,"Name too big"],
    minlength: [2,"Name too small"]
   },
  language: {
    type: String,
    enum:{
      values: lang_opt,
      message:"Wrong choice"
    }
  },
  editorial: {
    type: String,
    maxlength: [30,"Editorial name too big"],
    minlength: [3,"Editorial name too small"]
  },
  state: {
    type: String,
    default: 'active',
    enum:{
      values: state_opt,
      message:"Wrong choice"
    }
  }
});

const Book = mongoose.model("Book",book_schema);

module.exports = Book;
