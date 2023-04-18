var createError = require("http-errors");
var express = require("express");
var path = require('path');
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require('cors')

var userRouter = require("./routes/userDetailsRouter");
var subscriberRouter = require("./routes/subscriberDetailsRouter");

const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/hack";
const connect = mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  family: 4
});

connect.then(
  (db) => {
    console.log("Connected correctly to server");
  },
  (err) => {
    console.log(err);
  }
);

var app = express();
const port = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use("/userDetails", userRouter);
app.use("/subscriberDetails", subscriberRouter);
app.use(express.static(path.join(__dirname, '../r_app')))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
    console.log("Server is running at port ", port);
})

module.exports = app;
