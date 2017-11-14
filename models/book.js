const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/library';
const ObjectId = require('mongodb').ObjectId;

class Model{

	static create(body){
		return new Promise((resolve,reject) => {
			MongoClient.connect(url, function(err, db) {
				console.log("Connected correctly to server");
				console.log(body)
				db.collection('books').insertOne(body, function(err, result) {
					if(err){
						reject(err);
					}else{
						resolve(result)
					}
				})  	
			})
		})
	}	

	static findAll(){
		return new Promise((resolve,reject) => {
			MongoClient.connect(url, function(err, db) {
				db.collection('books').find().toArray(function(err, result) {
					if(err){
						reject(err);	
					}else{
						resolve(result)
					} 
				})  	
			})
		})
	}	

	static update(id,body){
		return new Promise((resolve,reject) => {
			MongoClient.connect(url, function(err, db) {
				console.log("Connected correctly to server");
				db.collection('books')
				.update({_id : ObjectId(id)}, 
					{$set : body}
					,{ upsert: true }, function(err, result) {
						if(err){
							reject(err);
						}else{
							resolve(result)
						}				
					})
			})	
		})
	}

	static destroy(id){
		return new Promise((resolve,reject) => {
			MongoClient.connect(url, function(err, db) {
				console.log("Connected correctly to server");
				db.collection('books')
				.deleteOne({_id : ObjectId(id)}, function(err, result) {
					if (err){
						reject(err);
					}else{
						resolve(result);
					}
				})
			})				
		})
	}		




}

module.exports = Model