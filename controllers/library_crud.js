const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID
// Connection URL
const url = 'mongodb://localhost:27017/library';

//insert data
let insertData = (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if(err){
      res.status(500).send(err)
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
        res.send(result)
      })
      
    }
  })
}

//get all data
let getAll = (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if(err){
      res.status(500).send(err)
    } else {
      db.collection('books').find({}).toArray((err, docs)=>{
        db.close();
        res.send(docs)
      })
    }
    
  })
}

//edit data
let editData = (req, res) => {
  MongoClient.connect(url, function(err, db) {
    let obj = {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        catagory: req.body.catagory,
        stock: req.body.stock 
      }
    
    var myquery = { _id: new ObjectID(req.params.id) };
    var newvalues = obj
    
    db.collection("books").updateOne(myquery, newvalues, function(err, result) {
      if (err) throw err;
      db.close();
      res.send({result})
    });
    
  })
}

let deleteData = (req, res) => {
  MongoClient.connect(url, function(err, db) {
    var myquery = { _id: new ObjectID(req.params.id) };
    db.collection("books").deleteOne(myquery, function(err, result) {
      db.close();
      res.send(result)
    })
    
  })
}

module.exports = {
  getAll,
  insertData,
  editData,
  deleteData
};