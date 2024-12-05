require('dotenv').config();
require('./connection');
const fs = require("fs")
const YAML = require('yaml')
const swaggerUi = require("swagger-ui-express")
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var path = require('path');
const file  = fs.readFileSync('./api.yml', 'utf8')
const swaggerDocument = YAML.parse(file)

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', usersRouter);
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', indexRouter);

module.exports = app;
