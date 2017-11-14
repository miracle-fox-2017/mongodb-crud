const app = require('express')()
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const books = require('./routes/bookRoute')

app.use('/api/books', books)

app.listen(3000, () => {
	console.log('jalan guys');
})