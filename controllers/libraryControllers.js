const MongoClient = require('mongodb').MongoClient

// Connection URL
var url = 'mongodb://localhost:27017/library';
const ObjectId = require('mongodb').ObjectID;

// Insert a single document
let addBooks = (req, res) => {
  // console.log(req.body);
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.collection('books').insertOne(req.body,
      function (err, dataBooks) {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          res.send('Document has been added');
        }
      }
    )
  });
}

// read all
let findAll = (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.collection('books').find().toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
}

//delete
let delBooks = (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let id = {
      _id: ObjectId(req.params.id)
    }
    db.collection("books").deleteOne(id, function(err, obj) {
      if (err) throw err;
      res.send("document deleted");
      db.close();
    });
  });
}

//edit books
let editBooks = (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let id = {
      _id: ObjectId(req.params.id)
    }
    let books = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }
    db.collection("books").updateOne(id, books, function(err, data) {
      if (err) throw err;
      res.send("document updated");
      db.close();
    });
  });
}



module.exports = {
  addBooks,
  findAll,
  delBooks,
  editBooks,
};
