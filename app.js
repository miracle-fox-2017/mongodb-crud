let express = require('express')
let app = express()

// Body Parser
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routers
let libraries = require('./routes/libraryRouter.js')
app.use('/libraries',libraries)

// listening server
app.listen(3000, function(){
  console.log('This app is listening on port SACENG');
})
