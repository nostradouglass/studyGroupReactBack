var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var index = require('./routes/index');
var create = require('./routes/create');
var read = require('./routes/read');
var remove = require('./routes/delete');

let DATABASE = "admin:tacos9900@ds131900.mlab.com:31900/react_tues"

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${DATABASE}`);

var db = mongoose.connection;

db.on('error',() => {
  console.log('db open error');
});

db.once('open', () => {
  console.log('Connection to database success');
});

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/new_user', create);
app.use('/users', read)
app.use('/remove', remove)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
});

module.exports = app;
