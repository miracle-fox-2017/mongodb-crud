var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/library";
var ObjectID = require('mongodb').ObjectId

var findOne = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if(err) {
      console.log(err)
    }
    else {
      db.collection("books").findOne({}, (err, result) => {
        res.send(result)
        db.close()
      })
    }
  })
}

var findAll = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if(err) {
      console.log(err)
    }
    else {
      db.collection("books").find({}).toArray((err, result) => {
        res.send(result)
        db.close()
      })
    }
  })
}

var insertOne = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if(err) {
      res.send(err)
    }
    else {
      db.collection("books").insertOne(req.body, (err, result) => {
        res.send('1 document telah di insert')
        db.close()
      })
    }
  })
}

var deleteOne = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if(err) {
      res.send(err)
    }
    else {
      var id = {
        _id: ObjectID(req.params.id)
      }

      db.collection("books").deleteOne(id, (err, obj) => {
        if(err) {
          console.log(err);
          res.send(err)
        }
        else {
          res.send('1 document telah di delete')
        }
      })
    }
  })
}

var editOne = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if(err) {
      res.send(err)
    }
    else {

      var id = {
        _id: ObjectID(req.params.id)
      }

      var newValue = {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }

      db.collection("books").updateOne(id, newValue, (err, result) => {
        res.send('berhasil edit 1 document')
        db.close()
      })
    }
  })
}

module.exports = {
  findOne,
  findAll,
  insertOne,
  deleteOne,
  editOne
};
