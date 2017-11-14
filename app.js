const app = require('express')()
const books = require('./routers/books')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', books)

app.listen(3000)
