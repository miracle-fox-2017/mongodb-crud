const MongoClient = require('mongodb').MongoClient
 , assert = require('assert');
 var ObjectId = require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017/library';

const read = (req, res) => {
		MongoClient.connect(url, function(err, db) {
			var col = db.collection('books');

		  assert.equal(null, err);
		  console.log("Connected correctly to server");

				col.find().toArray(function(err, doc) {
					     if(doc) {
					        // Got a document
					        res.send(doc)
					     } else {
					        db.close();
					        res.status(500).send('ini error')
					      }
					  });
		})
}

const insert = (req, res) => {
		MongoClient.connect(url, function(err, db) {
			var col = db.collection('books');

		  assert.equal(null, err);
		  console.log("Connected correctly to server");
				col.insert(req.body);
				res.status(201).send('created')
		})
}

const update = (req, res) => {
		MongoClient.connect(url, function(err, db) {
			var col = db.collection('books');

		  assert.equal(null, err);
		  console.log("Connected correctly to server");
				col.update({ "_id" : ObjectId(req.params.id) },{$set:req.body}, (err)=>{
					if(err){
						res.status(500).send('failed')
					}
					res.status(201).send('created')
				});
				
		})
}

const destroy = (req, res) => {
		MongoClient.connect(url, function(err, db) {
			var col = db.collection('books');

		  assert.equal(null, err);
		  console.log("Connected correctly to server");
				col.deleteOne({ "_id" : ObjectId(req.params.id) }, (err, success)=> {
					if(err){
						res.status(500).send(err)
					}
					res.status(200).send('deleted') 
				});
				
		})
}

		


module.exports = {
	read,
	insert,
	destroy,
	update
}
