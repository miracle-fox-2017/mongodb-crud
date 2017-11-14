const mongoClient=require("mongodb").MongoClient;
const ObjectId=require('mongodb').ObjectID;
const url="mongodb://127.0.0.1:27017/library";
const bookColl="books";

const getAllBooks=(req,res,next)=>{
    mongoClient.connect(url,(err,db)=>{
        if(err){
            throw err;
        }else{
            db.collection(bookColl).find({}).toArray((err,respond)=>{
                res.send(respond);
            })
        }
    })
}

const addBook=(req,res,next)=>{
    mongoClient.connect(url,(err,db)=>{
        if(err){
            throw err;
        }else{
            db.collection(bookColl).insertOne(req.body,(err,respond)=>{
                if(err){
                    throw err;
                }else{
                    res.send(respond);
                }
            });
        }
    });
}

const updateBook=(req,res,next)=>{
    mongoClient.connect(url,(err,db)=>{
        if(err){
            throw err;
        }else{
            const query={
                "_id":ObjectId(req.params.id)
            }
            db.collection(bookColl).updateOne(query,req.body,(err,respond)=>{
                if(err){
                    throw err;
                }else{
                    res.send(respond);
                }
            });
        }
    });
}

const deleteBook=(req,res,next)=>{
    mongoClient.connect(url,(err,db)=>{
        if(err){
            throw err;
        }else{
            const query={
                "_id":ObjectId(req.params.id)
            }
            db.collection(bookColl).deleteOne(query,(err,respond)=>{
                if(err){
                    throw err;
                }else{
                    res.send(respond);
                }
            });
        }
    });
}

module.exports={
    getAllBooks,
    addBook,
    updateBook,
    deleteBook
};
