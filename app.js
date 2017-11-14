const app = require('express')()
const bodyParser = require('body-parser')
const api = require('./routers/library')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', api)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})