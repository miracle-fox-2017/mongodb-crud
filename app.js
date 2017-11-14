const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let index = require('./routes/index')

app.use('/',index)


app.listen(3000,()=>{
  console.log(`3000`);
});