const Book = require('../models/books')

let findAll = (req, res) => {
  Book.findAll().then(books => {
    res.send(books)
  }).catch(err => {
    res.send(err)
  })
}

let insert = (req, res) => {
  Book.insert(req.body).then(successInsert => {
    res.send(successInsert)
  }).catch(err => {
    res.send(err)
  })
}

let update = (req, res) => {
  Book.update(req.params.id, req.body).then(successUpdate => {
    res.send(successUpdate)
  }).catch(err => {
    res.send(err)
  })
}

let remove = (req, res) => {
  Book.remove(req.params.id).then(successRemove => {
    res.send(successRemove)
  }).catch(err => {
    res.send(err)
  })
}

module.exports = {
  findAll,
  insert,
  update,
  remove
}
