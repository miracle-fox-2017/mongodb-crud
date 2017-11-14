const Book = require('../models/books')

let findAll = (req, res) => {
  Book.findAll().then(books => {
    res.send(books)
  }).catch(err => {
    res.status(500).send(err)
  })
}

let insert = (req, res) => {
  Book.insert(req.body).then(successInsert => {
    res.send(successInsert)
  }).catch(err => {
    res.status(500).send(err)
  })
}

let update = (req, res) => {
  Book.update(req.params.id, req.body).then(successUpdate => {
    res.send(successUpdate)
  }).catch(err => {
    res.status(500).send(err)
  })
}

let remove = (req, res) => {
  Book.remove(req.params.id).then(successRemove => {
    res.send(successRemove)
  }).catch(err => {
    res.status(500).send(err)
  })
}

module.exports = {
  findAll,
  insert,
  update,
  remove
}
