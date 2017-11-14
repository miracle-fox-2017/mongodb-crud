var MongoClient = require('mongodb').MongoClient
var objID       = require('mongodb').ObjectId

// MongoClient.connect('mongodb://localhost:27017/library', function (err, db) {
//   if (err) throw err

//   db.collection('book').find().toArray(function (err, result) {
//     if (err) throw err

//     console.log(result)
//   })
// })

const findAll = (req, res) => {
	MongoClient.connect('mongodb://localhost:27017/library', function (err, db) {
  	if (err) throw err

  	db.collection('book').find().toArray(function (err, result) {
    	if (err) throw err

    	res.send(result)
  	})
	})	
}

const findById = (req, res) => {
	MongoClient.connect('mongodb://localhost:27017/library', function (err, db) {
  	if (err) throw err

  	db.collection('book').findOne({_id :objID(req.params.id)}, function (err, result) {
    	if (err) throw err

    	res.send(result)
  	})
	})	
}

const createBook = (req, res) => {
	MongoClient.connect('mongodb://localhost:27017/library', function (err, db) {
  	if (err) throw err

  	db.collection('book').insertOne(req.body, function (err, result) {
  		db.close()

    	if (err) throw err

    	res.send(result)
  	})
	})	
}

const updateBook = (req, res) => {

	MongoClient.connect('mongodb://localhost:27017/library', function (err, db) {
  	if (err) throw err
  	db.collection('book').updateOne({_id :objID(req.params.id)}, req.body, function (err, result) {
  		db.close()

    	if (err) throw err

    	res.send(result)
  	})
	})	
}

const deleteBook = (req, res) => {

	MongoClient.connect('mongodb://localhost:27017/library', function (err, db) {
  	if (err) throw err
  	db.collection('book').deleteOne({_id :objID(req.params.id)}, function (err, result) {
  		db.close()

    	if (err) throw err

    	res.send(result)
  	})
	})	
}

module.exports = {
	findAll,
	findById,
	createBook,
	updateBook,
	deleteBook
}
