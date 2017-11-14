const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://admin:admin@mongocrud-shard-00-00-ilsdt.mongodb.net:27017,mongocrud-shard-00-01-ilsdt.mongodb.net:27017,mongocrud-shard-00-02-ilsdt.mongodb.net:27017/test?ssl=true&replicaSet=mongoCrud-shard-0&authSource=admin';
const url = 'mongodb://localhost:27017/library';

const ObjectId = require('mongodb').ObjectID;

class Book {
	static findAll() {
		return new Promise((resolve, reject) => {
			MongoClient.connect(url, function(err, db) {
				db.collection('books').find({}).toArray(function(err, result) {
					if (err){
						reject(err);
					}

					resolve(result);
				})
			});
		});
	}

	static update(bookId, data) {
		return new Promise((resolve, reject) => {
			MongoClient.connect(url, function(err, db) {
				db.collection('books').update({_id : ObjectId(bookId)},
					{$set: data}, function(err, result) {
						if (err){
							reject(err);
						}

						resolve(result);
					})
			});
		});
	}

	static create(data) {
		return new Promise((resolve, reject) => {
			MongoClient.connect(url, function(err, db) {
				db.collection('books').insertOne(data, function(err, result) {
					if (err){
						reject(err);
					}

					resolve(result);
				})
			});
		});
	}

	static destroy(bookId) {
		return new Promise((resolve, reject) => {
			MongoClient.connect(url, function(err, db) {
				db.collection('books').deleteOne({_id : ObjectId(bookId)}, function(err, result) {
					if (err){
						reject(err);
					}

					resolve(result);
				})
			});
		});
	}
}

module.exports = Book;