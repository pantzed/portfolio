const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const https = require('https');
const port = process.env.PORT || 8000;

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const projectsRouter = require('./routes/projects');
const spotifyRouter = require('./routes/spotify');

app.use('/projects', projectsRouter);
app.use('/spotify', spotifyRouter);
app.use(express.static(path.join(__dirname, 'client', 'index.html')));

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
});

// Listen
app.listen(port);


module.exports = app;