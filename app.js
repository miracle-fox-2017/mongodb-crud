const app=require("express")();
const parser=require("body-parser");

app.use(parser.urlencoded({extended:false}));
app.use(parser.json());

app.get("/",(req,res)=>{
    res.send("Index Page");
});

const user=require("./router/library");
app.use("/users",user);

app.listen(3000,()=>{
    console.log("Server started listenning on port 3000!");
});
