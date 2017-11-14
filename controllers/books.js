const ObjectID = require('mongodb').ObjectID
const MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/library';

const create = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    console.log("Connected successfully to server");
    var collection = db.collection('library');
    collection.insert(req.body, function(err, result) {
      if(err) res.status(500).send(err)
      else res.send(result)
    });
  });
}

const findAll = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    console.log("Connected successfully to server");
    var collection = db.collection('library');
    collection.find().toArray(function(err, docs) {
      if(err) res.status(500).send(err)
      else res.send(docs)
    });
  });
}

const update = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    console.log("Connected successfully to server");
    let id = {
      _id: ObjectID(req.params.id)
    }

    let obj = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }

    var collection = db.collection('library');
    collection.updateOne(id, { $set: obj }, function(err, result) {
      if(err) res.status(500).send(err)
      else res.send(result)
    });
  });
}

const destroy = function(req, res) {
  let id = {
    _id: ObjectID(req.params.id)
  }

  MongoClient.connect(url, function(err, db) {
    console.log("Connected successfully to server");
    var collection = db.collection('library');
    collection.deleteOne(id, function(err, result) {
      if(err) res.status(500).send(err)
      else res.send(result)
    });
  });
}

module.exports = {
  create, findAll, update, destroy
};
