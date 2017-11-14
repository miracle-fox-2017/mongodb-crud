const mongoClient=require("mongodb").MongoClient;
const url="mongodb://127.0.0.1:27017/library";
const ObjectId=require('mongodb').ObjectID;

// Model
const bookModel=require("../model/book");
const Book=new bookModel(url);

const bookColl="books";

const getAllBooks=(req,res,next)=>{
    Book.getAll().then((rows)=>{
        res.send(rows);
    }).catch((err)=>{
        res.send(err);
    });
}

const addBook=(req,res,next)=>{
    Book.add(req).then((respond)=>{
        res.send(respond)
    }).catch((err)=>{
        res.send(err);
    });
}

const updateBook=(req,res,next)=>{
    Book.update(req).then((respond)=>{
        res.send(respond)
    }).catch((err)=>{
        res.send(err);
    });
}

const deleteBook=(req,res,next)=>{
    Book.delete(req).then((respond)=>{
        res.send(respond)
    }).catch((err)=>{
        res.send(err);
    });
}

module.exports={
    getAllBooks,
    addBook,
    updateBook,
    deleteBook
};
