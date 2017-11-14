const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID

class Library{
  constructor(){
    this.url = 'mongodb://localhost:27017/library';
  }
  
  getAll(cb){
    MongoClient.connect(this.url, function(err, db) {
      if(err){
        cb(err, null)
      } else {
        db.collection('books').find({}).toArray((err, docs)=>{
          db.close();
          cb(null, docs)
        })
      }
      
    })
  }
  
  insertData(req, cb){
    MongoClient.connect(this.url, function(err, db) {
      if(err){
        cb(err, null)
      } else {
        let obj = {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            catagory: req.body.catagory,
            stock: req.body.stock 
          }
        
        // Insert a single document
        db.collection('books').insertOne(obj, function(err, result) {
          db.close();
          cb(null, result)
        })
        
      }
    })
  }

  editData(req, cb){
    MongoClient.connect(this.url, function(err, db) {
      if(err){
        cb(err, null)
      } else {
        let newvalues = {
          isbn: req.body.isbn,
          title: req.body.title,
          author: req.body.author,
          catagory: req.body.catagory,
          stock: req.body.stock 
        }
      
      var myquery = { _id: ObjectID(req.params.id) };
      
      db.collection("books").updateOne(myquery, newvalues, function(err, result) {
        db.close();
        if(err){
          cb(err, null)
        } else {
          cb(null, result)
        }
      });
    }
      
    })
  }

  deleteData(req, cb){
    MongoClient.connect(this.url, function(err, db) {
      if(err){
        cb(err, null)
      }
      var myquery = { _id: new ObjectID(req.params.id) };
      db.collection("books").deleteOne(myquery, function(err, result) {
        db.close();
        // res.send(result)
        cb(null, result)
      })
      
    })
  }
}

module.exports = Library;