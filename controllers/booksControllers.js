const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const url = "mongodb://localhost:27017/library";

let insertCollection = (req,res) => {
  console.log('======',req.body)
  MongoClient.connect(url, function(err,db){
    if(err){
      console.log(err)
    }else{
      db.collection('books').insertOne(req.body, function(err,res){
        if(!err){
          console.log('1 document inserted')
          db.close()
        }
      })
    }
  })
}

let findAll = (req,res) => {
  MongoClient.connect(url, function(err,db){
    if(err){
      console.log(err)
    }else{
      db.collection('books').find().toArray(function(err,data_Books){
        if(!err){
          console.log('get all data')
          res.send(data_Books)
          db.close()
        }
      })
    }
  })
}

let destroyDoc = (req,res) => {
  MongoClient.connect(url, function(err,db){
    if(err){
      console.log(err)
    }else{
      let id = {
        _id : ObjectId(req.params.id)
      }
      db.collection('books').deleteOne(id, function(err,res){
        if(!err){
          console.log('deleted document')
          db.close()
        }
      })
    }
  })
}

let updateDoc = (req,res) => {
  MongoClient.connect(url, function(err,db){
    if(err){
      console.log(err)
    }else{
      let id = {
        _id : ObjectId(req.params.id)
      }
      let newValues = {
        isbn : req.body.isbn,
        title : req.body.title,
        author : req.body.author,
        category : req.body.category,
        stock : req.body.stock
      }
      db.collection('books').updateOne(id, newValues, function(err,res){
        if(!err){
          console.log('1 document updated')
          db.close()
        }
      })
    }
  })
}

module.exports = {
  insertCollection,
  findAll,
  destroyDoc,
  updateDoc
}