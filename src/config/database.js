// database.js
const mongoose = require('mongoose');
const { db: { host, port, name, user, pass } } = require('./config');

if(!user) connStr = `mongodb://${host}:${port}/${name}`;
else connStr = `mongodb://${user}:${pass}@${host}:${port}/${name}`;

mongoose.connect(connStr)
  .then( () => console.log(`DB ${name} is connected`) )
  .catch( err => console.error(err.stack) );

module.exports = mongoose;
