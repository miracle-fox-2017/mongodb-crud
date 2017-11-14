const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID
// Connection URL
const url = 'mongodb://localhost:27017/library';

// require model
const ModelLibrary = require('../models/library')
const Library = new ModelLibrary()

//insert data
let insertData = (req, res) => {
  Library.insertData(req, (err, data)=>{
    if(err) res.status(501).send(err)
    else res.send(data)
  })

}

//get all data
let getAll = (req, res) => {
  Library.getAll((err, data)=>{
    if(err) res.status(501).send(err)
    else res.send(data)
  })

}

//edit data
let editData = (req, res) => {
  Library.editData(req, (err, data)=>{
    if(err) res.status(501).send(err)
    else res.send(data)
  })

}

//delete data
let deleteData = (req, res) => {
  Library.deleteData(req, (err, data)=>{
    if(err) res.status(501).send(err)
    else res.send(data)
  })

}

module.exports = {
  getAll,
  insertData,
  editData,
  deleteData
};