const app = require('express')();
const bodyParser = require('body-parser')
const index = require('./routes/index');
const library = require('./routes/libraries');
const logger = require('morgan');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//route
app.use('/', index);
app.use('/library', library);

app.listen(3000,(err)=>{
  if(!err){
    console.log('Jalan di port 3000');
  } else {
    console.log(err);
  }
})
