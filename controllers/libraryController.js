// MongoDB connection
let MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
let url = 'mongodb://localhost:27017/mongodbBooksLibrary';
let ObjectId = require('mongodb').ObjectId

// Methods

// Insert new document to library
let insertDataBooks = function(req,res){
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    db.collection('collection_books').insertOne(
      {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      },
      function(err,dataBooks){
        if(err){
          res.status(500).send(err)
        }
        else{
          res.send('Document has been added')
        }
      }
    )
  });
}

// Find all books
let findAllBooks = function(req,res){
  MongoClient.connect(url,function(err,db){
    if(err){
      console.log(err);
    }
    else{
      db.collection('collection_books').find().toArray(function(err,dataBooks){
        if(err){
          res.status(500).send(err)
        }
        else{
          res.send(dataBooks)
        }
      })
    }
  })
}

// Update books in collection
let updateBookById = function(req,res){
  console.log(req.params.id);
  MongoClient.connect(url,function(err,db){
    if(err){
      console.log(err);
    }
    else{
      db.collection('collection_books').updateOne(
        {
          _id: ObjectId(req.params.id)
        },
        {
          isbn: req.body.isbn,
          title: req.body.title,
          author: req.body.author,
          category: req.body.category,
          stock: req.body.stock
        },
        function(err,response){
          if(err){
            res.status(500).send(err)
          }
          else{
            res.send('Document has ben updated')
          }
        }
      )
    }
  })
}

// Delete books by id
let removeBookById = function(req,res){
  MongoClient.connect(url,function(err,db){
    if(err){
      console.log(err);
    }
    else{
      db.collection('collection_books').deleteOne(
        {
          _id: ObjectId(req.params.id)
        },
        function(err,response){
          if(err){
            res.status(500).send(err)
          }
          else{
            res.send('Document has been deleted')
          }
        }
      )
    }
  })
}

module.exports = {
  insertDataBooks,
  findAllBooks,
  updateBookById,
  removeBookById
}
