var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/library";
let ObjectId = require('mongodb').ObjectId

findAllDataBooks = (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) {
            //console.log("Haloooo, error kah", err)
            res.status(500).send(err)
        } else {
            db.collection("books").find().toArray(function (err, dataUsers) {
                if (err) {
                    //  console.log("Haloooo, error kah", err)
                    res.send(err)
                } else {
                    res.send(dataUsers)
                }
            })
        }
    })
}

insertIntoBooks = (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) {
            res.status(500).send(err)
        } else {
            db.collection("books").insertOne(req.body, function (err, result) {
                if (err) {
                    res.send(err)
                } else {
                    res.send("1 document inserted!")
                    db.close()
                }
            })
        }
    })
}

updateDataBook = (req, res) => {

    //console.log(req.params.id)
    MongoClient.connect(url, (err, db) => {
        if (err) {
            console.log("Haloooo, error kah", err)
            res.status(500).send(err)
        } else {
            let myQuery = { _id: ObjectId(req.params.id) }

            db.collection("books").updateOne(myQuery, req.body, function (err, result) {
                if (err) {
                    console.log("Haloooo, error kah", err)
                    res.send(err)
                } else {
                    res.send("1 document updated!")
                    db.close()
                }
            })
        }
    })
}

deleteDataBook = (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) {
            res.status(500).send(err)
        } else {
            let myQuery = { _id: ObjectId(req.params.id) }
            db.collection("books").deleteOne(myQuery, function (err, obj) {
                if (err) {
                    res.send(err)
                } else {
                    res.send("1 document deleted!")
                    db.close()
                }
            })
        }
    })
}


module.exports = {
    findAllDataBooks,
    insertIntoBooks,
    updateDataBook,
    deleteDataBook

}