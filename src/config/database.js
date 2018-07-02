// database.js
const mongoose = require('mongoose');
const { db: { host, port, name } } = require('./config');

const connStr = `mongodb://${host}:${port}/${name}`;

mongoose.connect(connStr)
  .then( () => console.log(`DB ${name} is connected`) )
  .catch( err => console.error(err.stack) );

module.exports = mongoose;
