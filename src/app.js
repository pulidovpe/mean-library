const createError = require('http-errors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const { mongoose } = require('./config/database');
const apiIndex = require('./routs/index');
const apiBook = require('./routs/book');
const apiUser = require('./routs/user');
const apiBorrow = require('./routs/borrow');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/', express.static(path.join(__dirname, '../dist')));
app.use('/api', apiIndex);
app.use('/api', apiBook);
app.use('/api', apiUser);
app.use('/api', apiBorrow);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendStatus(err.status);
});

module.exports = app;
