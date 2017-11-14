const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/library';
const ObjectId = require('mongodb').ObjectId;
const Model = require('../models/book')


function createOneBook(req,res){
	Model.create(req.body)
	.then(result => {
		res.send(result);
	})
	.catch(err => {
		res.send(err);
	})
}	

function getAllBooks(req,res){
	Model.findAll()
	.then(allBooks => {
		res.send(allBooks)
	})
	.catch(err => {
		res.send(err);
	})
}	

function updateBook(req,res){	
	Model.update(req.params.id, req.body)
	.then(result => {
		res.send(result);
	})
	.catch(err => {
		res.send(err);
	})
}

function deleteBook(req,res){
	Model.destroy(req.params.id)
	.then(result => {
		res.send(result);
	})
	.catch(err => {
		res.send(err);
	})
}		

module.exports = {	
	createOneBook,
	getAllBooks,
	updateBook,
	deleteBook
}