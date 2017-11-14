const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const api = require('./routes/api')

app.use('/api', api)

app.listen(3000, () => {
  console.log('Listening on port 3000');
})
