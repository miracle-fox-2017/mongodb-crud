const app        = require('express')();
const bodyParser = require('body-parser');
const morgan     = require('morgan')
const books      = require('./routers/booksRouter');


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/books', books)


app.get('/', function (req, res) {
  res.send('Hello World!');
})
app.listen(3000, function () {
  console.log('IT WORKS!');
})