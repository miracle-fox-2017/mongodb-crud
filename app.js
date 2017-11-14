const app = require('express')();
const morgan = require('morgan')
const bodyParser = require('body-parser')

//require router
const library = require('./routes/library')

//use body parser
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded 
app.use(bodyParser.json()) // parse application/json

//use morgan
app.use(morgan('combined'))

//use router
app.use('/library', library)

//listen
app.listen(3000, ()=> {
  console.log('listen on 3000')
})