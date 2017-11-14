const express = require('express')
const app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var library = require('./routes/library');
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/library', library);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
