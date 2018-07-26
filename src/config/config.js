// config.js
const env = process.env.NODE_ENV;

const dev = {
   app: {
      port: parseInt(process.env.PORT) || 3000
   },
   db: {
      host: process.env.DEV_DB_HOST || 'localhost',
      port: parseInt(process.env.DEV_DB_PORT) || 27017,
      name: process.env.DEV_DB_NAME || 'books'
   }
};
const test = {
   app: {
      port: parseInt(process.env.TEST_APP_PORT) || 3000
   },
   db: {
      host: process.env.TEST_DB_HOST || 'localhost',
      port: parseInt(process.env.TEST_DB_PORT) || 27017,
      name: process.env.TEST_DB_NAME || 'test'
   }
};

module.exports = dev;
