const mongoClient=require("mongodb").MongoClient;
const ObjectId=require('mongodb').ObjectID;

class Book{
    constructor(database){
        this.url=database
        this.bookColl="books";
    }

    getAll(){
        return new Promise((resolve,reject)=>{
            mongoClient.connect(this.url,(err,db)=>{
                if(err){
                    reject(err);
                }else{
                    db.collection(this.bookColl).find({}).toArray((err,respond)=>{
                        if(err){
                            reject(err);
                        }else{
                            resolve(respond);
                        }
                    });
                }
            });
        });
    }

    add(req){
        return new Promise((resolve,reject)=>{
            mongoClient.connect(this.url,(err,db)=>{
                if(err){
                    reject(err);
                }else{
                    db.collection(this.bookColl).insertOne(req.body,(err,respond)=>{
                        if(err){
                            reject(err);
                        }else{
                            resolve(respond);
                        }
                    });
                }
            });
        });
    }

    update(req){
        return new Promise((resolve,reject)=>{
            mongoClient.connect(this.url,(err,db)=>{
                if(err){
                    reject(err);
                }else{
                    const query={
                        "_id":ObjectId(req.params.id)
                    }
                    db.collection(this.bookColl).updateOne(query,req.body,(err,respond)=>{
                        if(err){
                            reject(err);
                        }else{
                            resolve(respond);
                        }
                    });
                }
            });
        });
    }

    delete(req){
        return new Promise((resolve,reject)=>{
            mongoClient.connect(this.url,(err,db)=>{
                if(err){
                    reject(err);
                }else{
                    const query={
                        "_id":ObjectId(req.params.id)
                    }
                    db.collection(this.bookColl).deleteOne(query,(err,respond)=>{
                        if(err){
                            reject(err);
                        }else{
                            resolve(respond);
                        }
                    });
                }
            });
        });
    }
}

module.exports=Book;
