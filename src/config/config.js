// config.js
require('dotenv').config();

const prod = {
   app: {
      port: parseInt(process.env.PORT) || 3000
   },
   db: {
      host: process.env.DEV_DB_HOST,
      port: parseInt(process.env.DEV_DB_PORT),
      name: process.env.DEV_DB_NAME,
      user: process.env.DEV_DB_USER,
      pass: process.env.DEV_DB_PASS
   }
};
const dev = {
   app: {
      port: parseInt(3000)
   },
   db: {
      host: 'localhost',
      port: parseInt(27017),
      name: 'books',
      user: '',
      pass: ''
   }
};

module.exports = dev;
