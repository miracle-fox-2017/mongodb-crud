const express = require('express');
const ObjectId =  require('mongodb').ObjectId
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/library'

let insertData = function(req,res) {
  MongoClient.connect(url ,(err,db)=>{
    let addData = db.collection('library')
    if(!err){
      addData.insertOne({
        isbn : req.body.isbn,
        title : req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock : req.body.stock
      }, (err,result)=>{
        if(!err){
          res.send(result)
        }
        else {
          res.send(err)
        }
      })
    }
  })
}

let viewData = function(req,res){
  MongoClient.connect(url,(err,db)=>{
    let data = db.collection('library')
    if (!err) {
      data.find({}).toArray((err,result)=>{
        if (!err) {
          res.send(result)
        }
        else {
          res.send(err)
        }
      })
    }
  })
}

let deleteData = function(req,res){
  MongoClient.connect(url,(err,db)=>{
    let delete_Data = db.collection('library')
    if (!err) {
      delete_Data.deleteOne({
        _id:ObjectId(req.params.id
        )},
        (err,result)=>{
        if(!err){
          res.send(result)
        }
        else {
          res.send(err)
        }
      })
    }
  })
}

let editData = function(req,res){
  MongoClient.connect(url,(err,db)=>{
    let data_Edit = db.collection('library')
    if (!err) {
      data_Edit.updateOne({_id:ObjectId(req.params.id)},
      {
        isbn : req.body.isbn,
        title : req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock : req.body.stock
      },(err,result)=>{
        if (!err) {
          res.send(result)
        }
        else {
          res.send(err)
        }
      })
    }
  })
}

module.exports = {
  insertData,
  viewData,
  deleteData,
  editData
};
