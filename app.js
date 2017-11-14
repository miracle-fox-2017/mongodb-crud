const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//routes
const books = require('./routes/books')
app.use('/books', books)

app.listen(3000, function(err){
  if(!err){
    console.log('serv listen on port 3000')
  }
})