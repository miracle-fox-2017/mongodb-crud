const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/library';
const ObjectId = require('mongodb').ObjectID;

class Book {
  static findAll() {
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url, function(err, db) {
        // find all data books
        db.collection('books').find().toArray((err, docs) => {
          if(!err){
            resolve(docs)
          }else{
            reject(err)
          }
        })
      });
    });
  }

  static insert(newBookData) {
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url, function(err, db) {
        // Insert document
        if (newBookData._id) {
          newBookData._id = ObjectId(newBookData._id)
        }
        // console.log(newBookData);
        db.collection('books').insert(newBookData, function(err, result) {
          if(!err){
            resolve(result)
          }else{
            reject(err)
          }
        });
      });
    })
  }

  static update(id, newBookData) {
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url, function(err, db) {
        // Update/edit document
        db.collection("books").updateOne({_id : ObjectId(id)}, newBookData, function(err, result) {
          if (!err){
            resolve(result)
          }else{
            reject(err)
          }
        });
      });
    })
  }

  static remove(id) {
    return new Promise(function(resolve, reject) {
      MongoClient.connect(url, function(err, db) {
        // Update/edit document
        db.collection("books").deleteOne({_id : ObjectId(id)}, function(err, result) {
          if (!err){
            resolve(result)
          }else{
            reject(err)
          }
        });
      });
    })
  }
}

module.exports = Book;
