const mongoose = require('mongoose');
const { Schema } = mongoose;

const email_match = [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,"Wrong email format"];

const user_schema = new Schema({
  nid: {
    type: String,
      required: true,
      unique: true,
    maxlength: [10,"Too big"],
    minlength: [6,"Too small"]
  },
  name: {
    type: String,
    required: true,
    maxlength: [30,"Too big"],
    minlength: [6,"Too small"]
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: email_match
  },
  address: {
    type: String,
    required: true
  }

});

var User = mongoose.model("User",user_schema);

module.exports = User;
