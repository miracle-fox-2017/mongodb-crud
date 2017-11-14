const MongoClient = require('mongodb').MongoClient
  , assert = require('assert');


const url = 'mongodb://localhost:27017/library';
const ObjectId = require('mongodb').ObjectID // method untuk mendapakan object id


  const findAll = (req, res) => {
    MongoClient.connect(url, function(err, db) {
      console.log("Connected correctly to server");
      const collection =  db.collection('books')
      collection.find().toArray((err, docs) =>{
        if (!err){
          console.log(docs);
          res.send(docs)
          db.close();
        } else {
          res.status(500).send(err);
        }
      })
    });
  }


  const insert = (req, res) => {
    console.log('masuk sini insert');
    MongoClient.connect(url, function(err, db) {
      console.log("Connected correctly to server");
      const collection =  db.collection('books')
      console.log(req.body);
      collection.insert(
        {
          isbn     : req.body.isbn,
          title    : req.body.title,
          author   : req.body.author,
          category : req.body.category,
          stock    : req.body.stock
        }
      ),(err, docs) =>{
        if (!err){
          console.log(docs);
          res.send('Succes')
          db.close();
        } else {
          res.status(500).send(err);
        }
      }
    });
  }


  const findById = (req, res) => {
    MongoClient.connect(url, function(err, db) {
      console.log("Connected correctly to server");
      const collection =  db.collection('books')
      collection.find({
        _id :ObjectId(req.params.id)
      }).toArray((err, docs) => {
        if (!err){
          console.log(docs);
          res.send(docs)
          db.close();
        } else {
          res.status(500).status(err);
        }
      })
    });
  }

  const update = (req, res) => {
    MongoClient.connect(url, function(err, db) {
      console.log("Connected correctly to server");
      const collection =  db.collection('books')
      collection.update(
        {
          _id : ObjectId(req.params.id)
        }, {
          $set : {
            isbn     : req.body.isbn,
            title    : req.body.title,
            author   : req.body.author,
            category : req.body.category,
            stock    : req.body.stock
          }
        }),(err, docs) =>{
        if (!err) {
          console.log(docs);
          res.send('Succes')
          db.close();
        } else {
          res.status(500).send(err);
        }
      }
    });
  }

  const destroy = (req, res) => {
    MongoClient.connect(url, function(err, db) {
      console.log("Connected correctly to server");
      const collection =  db.collection('books')
      collection.deleteOne(
        {
          _id : ObjectId(req.params.id)
        }
      ),(err, docs) =>{
        if (!err){
          console.log(docs);
          res.send('Succes Delete')
          db.close();
        } else {
          res.status(500).send(err);
        }
      }
    });
  }











module.exports = {
  findAll,
  insert,
  findById,
  update,
  destroy

}
