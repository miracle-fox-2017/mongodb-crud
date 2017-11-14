const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
// Connection URL
const url = 'mongodb://localhost:27017/library';

let getAllBooks = (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if(!err){
      console.log("Connected to get all books");
      // SHow document
      db.collection('books').find().toArray(function(err, dataBooks) {
        res.send(dataBooks)
      });
    }
  });
}
let createBook = (req, res) => {
  console.log(req.body);
  MongoClient.connect(url, function(err, db) {
    if(!err){
      console.log("Connected to insert book");
      // Insert a single document
      db.collection('books').insertOne(req.body, function(err, dataBook) {
        res.send(dataBook)
      });
    }
  });
}

let deleteBook = (req, res) => {
  console.log(req.params.id);
  MongoClient.connect(url, function(err, db) {
    if(!err){
      console.log("Connected to delete book");
      // Delete a single document
      let id = {
        _id: ObjectId(req.params.id)
      }
      db.collection('books').deleteOne(id, function(err, r) {
        res.send('data Terhapus')
      });
    }
  });
}

let updateBook = (req, res) => {
  console.log(req.params.id);
  MongoClient.connect(url, function(err, db) {
    if(!err){
      console.log("Connected to update book");
      // Update a single document
      let edit = req.body
      let id = {
        _id: ObjectId(req.params.id)
      }
      let book = {
        isbn : edit.isbn,
        title: edit.title,
        author: edit.author,
        category: edit.category,
        stock: edit.stock
      }
      db.collection('books').updateOne(id, book,function(err, r) {
        res.send('data Terupdate')
      });
    }
  });
}

module.exports = {
  createBook,
  getAllBooks,
  deleteBook,
  updateBook
}
