const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://admin:admin@mongocrud-shard-00-00-ilsdt.mongodb.net:27017,mongocrud-shard-00-01-ilsdt.mongodb.net:27017,mongocrud-shard-00-02-ilsdt.mongodb.net:27017/test?ssl=true&replicaSet=mongoCrud-shard-0&authSource=admin';
const ObjectId = require('mongodb').ObjectID;

function getAllBook(req, res) {
	MongoClient.connect(url, function(err, db) {
		db.collection('books').find({}).toArray(function(err, result) {
			if (err){
				res.send(err);
			}

			res.send(result);
		})
	});
}

function updateOneBook(req, res) {
	MongoClient.connect(url, function(err, db) {
		db.collection('books').update({_id : ObjectId(req.params.bookId)},
			{$set: req.body}, function(err, result) {
			if (err){
				res.send(err);
			}

			res.send(result);
		})
	});
}

function createOneBook(req, res) {
	MongoClient.connect(url, function(err, db) {
		db.collection('books').insertOne(req.body, function(err, result) {
			if (err){
				res.send(err);
			}

			res.send(result);
		})
	});
}

function deleteOneBook(req, res) {
	MongoClient.connect(url, function(err, db) {
		db.collection('books').deleteOne({_id : ObjectId(req.params.bookId)}, function(err, result) {
			if (err){
				res.send(err);
			}

			res.send(result);
		})
	});
}

module.exports = {
	updateOneBook,
	deleteOneBook,
	getAllBook,
	createOneBook
}