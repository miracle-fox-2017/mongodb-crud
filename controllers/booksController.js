const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/library';
const objectId = require('mongodb').ObjectID;

const sambung = (action) => {
  MongoClient.connect(url, action)
}

const insert = (req, res) => {
  /*
  versi lama, mongoclient dipanggil berkali kali
  */
  // MongoClient.connect(url, (err, db) => {
  //   console.log("masuk di sini 2");
    // db.collection('Books').insertOne(req.body, (err, row) => {
    //   err
    //   ? res.status(500).send(err)
    //   : res.send(row)
    // })
  // })
  
  sambung((err, db) => {
    db.collection('Books').insertOne(req.body, (err, row) => {
      err
      ? res.status(500).send(err)
      : res.send(row)
    })
  })
  
}

const findAll = (req, res) => {
  sambung((err, db) => {
    db.collection('Books').find({}).toArray((err, rows) => {
      err
      ? res.status(500).send(err)
      : res.send(rows)
    })
  })
}

const update = (req, res) => {
  
  /*
  tanpa menggunakan objectID
  */
  
  // MongoClient.connect(url, (err, db) => {
  //   db.collection('Books').updateOne({isbn : req.body.isbn}, {$set : req.body}, (err, result) => {
  //     err
  //     ? res.status(404).send(err)
  //     : res.send(result)
  //   })
  // })
  
  
  sambung( (err, db) => {
    db.collection('Books').updateOne({_id : objectId(req.params.id)}, {$set : req.body}, (err, result) => {
      err
      ? res.status(404).send(err)
      : res.send(result)
    })
  })
}

const destroy = (req, res) => {
  sambung((err, db) => {
    db.collection('Books').deleteOne({_id : objectId(req.params._id)},(err, result) => {
      err
      ? res.status(404).send(err)
      : res.send(result)
    })
  })
}

module.exports = {
  findAll,
  insert,
  update,
  destroy
};