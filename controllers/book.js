const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://admin:admin@mongocrud-shard-00-00-ilsdt.mongodb.net:27017,mongocrud-shard-00-01-ilsdt.mongodb.net:27017,mongocrud-shard-00-02-ilsdt.mongodb.net:27017/test?ssl=true&replicaSet=mongoCrud-shard-0&authSource=admin';
const url = 'mongodb://localhost:27017/library';
const Book = require('../models/book');
const ObjectId = require('mongodb').ObjectID;

function getAllBook(req, res) {
	Book.findAll()
		.then((books) => {
			res.status(200).send(books);
		}).catch(err => {
			res.status(500).send({message: err.message});
		})
}

function updateOneBook(req, res) {
	Book.update(req.params.bookId, req.body)
		.then((book) => {
				res.status(200).send({data: book});
			}).catch(err => {
				res.status(500).send({message: err.message});
			})
}

function createOneBook(req, res) {
	Book.create(req.body)
		.then((book) => {
				res.status(200).send({data: book});
			}).catch(err => {
				res.status(500).send({message: err.message});
			})
}

function deleteOneBook(req, res) {
	Book.destroy(req.params.bookId)
		.then((book) => {
				res.status(200).send({data: book});
			}).catch(err => {
				res.status(500).send({message: err.message});
			})
}

module.exports = {
	updateOneBook,
	deleteOneBook,
	getAllBook,
	createOneBook
}