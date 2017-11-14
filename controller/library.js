const mongoClient=require("mongodb").MongoClient;
const url="mongodb://127.0.0.1:27017/library";
const userColl="books";

const getAllBooks=(req,res,next)=>{
    mongoClient.connect(url,(err,db)=>{
        if(err){
            throw err;
        }else{
            db.collection(userColl).find({}).toArray((err,respond)=>{
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
            db.collection(userColl).insertOne(req.body,(err,respond)=>{
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
                "isbn":req.params.isbn
            }
            db.collection(userColl).updateOne(query,req.body,(err,respond)=>{
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
                "isbn":req.params.isbn
            }
            db.collection(userColl).deleteOne(query,(err,respond)=>{
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
