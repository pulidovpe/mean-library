// database.js
const mongoose = require('mongoose');
const { db: { host, port, name } } = require('./config');

/*const connStr = `mongodb://${host}:${port}/${name}`;*/
const connStr = `mongodb://**********:**********@ds255451.mlab.com:55451/mean-library`;

mongoose.connect(connStr)
  .then( () => console.log(`DB ${name} is connected`) )
  .catch( err => console.error(err.stack) );

module.exports = mongoose;
