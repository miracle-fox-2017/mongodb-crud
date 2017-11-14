const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID

class Library{
  constructor(){
    this.url = 'mongodb://localhost:27017/library'
    this.collectionName = 'books'
  }
  
  getAll(cb){
    let col = this.collectionName;
    MongoClient.connect(this.url, function(err, db) {
      if(err){
        cb(err, null)
      } else {
        db.collection(col).find({}).toArray((err, docs)=>{
          db.close();
          cb(null, docs)
        })
      }
      
    })
  }
  
  insertData(req, cb){
    let col = this.collectionName;
    MongoClient.connect(this.url, function(err, db) {
      if(err){
        cb(err, null)
      } else {
        let obj = {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            catagory: req.body.catagory,
            stock: Number(req.body.stock) 
          }
        
        // Insert a single document
        db.collection(col).insertOne(obj, function(err, result) {
          db.close();
          cb(err, result)
        })
        
      }
    })
  }

  editData(req, cb){
    let col = this.collectionName;
    MongoClient.connect(this.url, function(err, db) {
      if(err){
        cb(err, null)
      } else {
        let newvalues = {
          isbn: req.body.isbn,
          title: req.body.title,
          author: req.body.author,
          catagory: req.body.catagory,
          stock: Number(req.body.stock) 
        }
        var myquery = { _id: ObjectID(req.params.id) };
        db.collection(col).updateOne(myquery, newvalues, function(err, result) {
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
    let col = this.collectionName;
    MongoClient.connect(this.url, function(err, db) {
      if(err){
        cb(err, null)
      } else {
        var myquery = { _id: new ObjectID(req.params.id) };
        db.collection(col).deleteOne(myquery, function(err, result) {
          db.close();
          cb(err, result)
        })  
      }
      
    })
  }
}

module.exports = Library;