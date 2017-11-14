const app = require('express')();
const morgan = require('morgan')
const MongoClient = require('mongodb').MongoClient

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const url = 'mongodb://localhost:27017/library';

const index = require('./routers/index')

app.use(morgan('dev'));
app.use('/', index);

app.listen(3001);